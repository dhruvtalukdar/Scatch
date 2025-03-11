const userModel = require("../models/user-model");

module.exports = async function (req, res, next) {
    console.log(req.cookies.token);
    
    if (!req.cookies.token) {
        console.log("error", "Please log in to access this page");
        return res.redirect("/");
    }

    try {
        let decoded = jwt.verify(req.cookies.token, process.env.JWT_KEY);
        let user = await userModel
            .findOne({ email: decoded.email })
            .Select("-password");

        req.user = user;

        next();
    }
    catch (err) {
        console.log("error", "something went wrong");
        return res.redirect("/");
    }
}
