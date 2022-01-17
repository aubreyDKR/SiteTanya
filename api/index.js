const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");

const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const projectRoute = require("./routes/project");

const express = require("express");
const cookieSession = require("cookie-session");


const cors = require("cors");
const passportSetup = require("./passport");
const passport = require("passport");
const authRoute = require("./routes/auth");
const { isLoggedInAndAdmin, isLoggedOut } = require("./routes/autorisationCheck");

dotenv.config();

const app = express();
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_SECRET_KEY]
}));


mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DB Connection Successfull!"))
    .catch((err) => {
        console.log(err);
    });
app.use(cors({
    origin: "http://localhost:5001",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
}));
/*app.use(cors({
    origin: "http://localhost:5002",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
}));*/

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/auth", authRoute);
app.use("/api/projects", projectRoute);

app.use(express.static(path.resolve(__dirname, "../client/build")));
app.use(express.static(path.resolve(__dirname, "../admin/build")));

app.get("/admin/*", isLoggedInAndAdmin, function (req, res) {
    res.sendFile(path.resolve(__dirname, "../admin/build", "index.html"));
});
app.get("/admin", isLoggedInAndAdmin, function (req, res) {
    res.sendFile(path.resolve(__dirname, "../admin/build", "index.html"));
});
app.get("/login", isLoggedOut, function (req, res) {
    res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});
app.get("*", function (req, res) {
    res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server listening on port 5000");
}
)