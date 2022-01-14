const dotenv = require('dotenv').config();
const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require("./models/User");

passport.serializeUser((user,done) => {
    done(null, user.id);
});

passport.deserializeUser((id,done) => {
    User.findById(id).then((user) => {
        done(null,user);
    });
});

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "/api/auth/google/callback",
        },
        function(request, accessToken, refreshToken, profile, done) {
            //CHECK IF USER ALREADY IN DB
            User.findOne({googleId: profile.id}).then((currentUser) => {
                if(currentUser) {
                    //ALREADY HAVE THE USER
                    done(null, currentUser);
                } else {
                    //IF NOT, CREATE A USER IN DB
                    new User({
                        username: profile.displayName,
                        email: profile.emails[0].value,
                        profilePicture: profile.photos[0].value,
                        googleId: profile.id,
                    }).save().then((newUser) => {
                        done(null,newUser);
                    });
                }
            });
        }
    )
);