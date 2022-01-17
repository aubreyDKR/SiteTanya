const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const dotenv = require("dotenv");
const { isLoggedIn, isLoggedInAndAuthorized, isLoggedInAndAdmin } = require("./autorisationCheck");

dotenv.config();

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

router.get("/login/failed", (req,res) => {
    res.status(401).json({
        success: false,
        message: "Error : connection failure",
    });
    res.redirect(process.env.CLIENT_URL);
});

router.get("/getUserInfos", isLoggedIn, async (req,res) => {
    await wait(3000);
    await res.status(200).json({
        success: true,
        user: req.user,
    });
});

//LOGIN WITH GOOGLE
router.get("/google", passport.authenticate("google", {scope: ["email" ,"profile"] }));

/*router.get("/google", passport.authenticate("google", {session: false, scope: ["email" ,"profile"] }));*/

router.get("/google/callback", passport.authenticate("google", {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: "/login/failed",
}));


//LOGOUT WITH GOOGLE
router.get("/logout", (req,res) => {
    req.logout();
    res.redirect(process.env.CLIENT_URL);
});

//REGISTER
router.post("/register", async (req,res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(
            req.body.password, 
            process.env.PASS_PHRASE
            ).toString(),
    });

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json(err);
    }
});

//LOGIN
router.post("/login", async (req,res) => {
    try {
        const user = await User.findOne({ username: req.body.username });

        !user && res.status(401).json("Wrong credentials!")

        const hashedPassword = CryptoJS.AES.decrypt( user.password, process.env.PASS_PHRASE);

        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        originalPassword !== req.body.password && 
            res.status(401).json("Wrong credentials!");

        const accessToken = jwt.sign(
            {
                id: user._id, 
                isAdmin: user.isAdmin,
            }, 
        process.env.JWT_KEY,
        {expiresIn:"3d"}
        );

        const {password, ...others} = user._doc;

        res.status(200).json({...others, accessToken});
    } catch (err) {
        res.status(500).json(err);
    }
    
});

module.exports = router;