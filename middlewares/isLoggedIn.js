// const userModel = require("../models/user-model");

// module.exports = async function (req, res, next) {
//     if (!req.cookies.token) {
//         req.flash("error", "Please log in to access this page");
//         return res.redirect("/");
//     }

//     try {
//         let decoded = jwt.verify(req.cookies.token, process.env.JWT_KEY);
//         let user = await userModel
//             .findOne({ email: decoded.email })
//             .Select("-password");

//         req.user = user;

//         next();
//     }
//     catch (err) {
//         req.flash("error", "something went wrong");
//         return res.redirect("/");
//     }
// }
// 