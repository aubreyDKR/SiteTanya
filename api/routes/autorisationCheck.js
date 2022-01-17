const isLoggedIn = (req,res,next) => {
    if (req.user) {
        next();
    } else {
        return res.status(401).json("You are not authenticated!");
    }
}

const isLoggedOut = (req, res, next) => {
    if (!req.user) {
        next();
    } else {
        return res.status(401).redirect("/");
    }
}

const isLoggedInAndAuthorized = (req,res,next) => {
    isLoggedIn(req,res, () => {
       if(req.user.id === req.params.id || req.user.isAdmin) {
           next();
       } else {
           res.status(403).json("You are not allowed to do that !");
       }
    })
}

const isLoggedInAndAdmin = (req,res,next) => {
    isLoggedIn(req,res, () => {
        if (req.user.isAdmin) {
            next();
        } else {
            res.status(403).json("You are not allowed to do that !");
        }
    })
}

module.exports = { isLoggedIn, isLoggedOut, isLoggedInAndAuthorized, isLoggedInAndAdmin };