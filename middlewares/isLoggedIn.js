const jwt = require("jsonwebtoken");
const userModel = require("../models/user-model");

module.exports = async function(req, res, next) {
    try {
        console.log("Recieved Token: ", req.cookies.token);

        if (!req.cookies.token) {
            console.log("error", "Please log in to access this page");
            return res.redirect("/");
        }

        // Verify JWT
        let decoded;
        try {
            decoded = jwt.verify(req.cookies.token, process.env.JWT_KEY);
            console.log("Decoded JWT:", decoded);
        } catch (jwtError) {
            console.error("JWT Verification Error:", jwtError.message);
            req.flash("error", "Invalid or expired token");
            return res.redirect("/");
        }

        
        // Find user in DB
        const user = await userModel.findOne({ email: decoded.email }).select("-password");
        
        if (!user) {
            console.error("User not found in DB");
            req.flash("error", "User not found");
            return res.redirect("/");
        }
    

        console.log("User found:", user);
        req.user = user;
        next();
    } catch (err) {
        console.error("Unexpected Error in isLoggedIn Middleware:", err);
        req.flash("error", "Something went wrong");
        return res.redirect("/");
    }
};

// where to use try catch and where it's okay not to use





// const userModel = require("../models/user-model");
// const jwt = require("jsonwebtoken");


// module.exports = async function (req, res, next) {
//     // console.log("Headers:", req.headers); 
//     // console.log("Cookies:", req.cookies); 
//     console.log("Decoded token : ", req.cookies.token);
    
//     if (!req.cookies.token) {
//         console.log("error", "Please log in to access this page");
//         return res.redirect("/");
//     }

//     try {
//         let decoded = jwt.verify(req.cookies.token, process.env.JWT_KEY);
//         let user = await userModel
//             .findOne({ email: decoded.email })
//             .Select("-password");
//         if(!user) {
//             console.log("Error getting user");
//         }
//         req.user = user;

//         next();
//     }
//     catch (err) {
//         console.log("error", "something went wrong");
//         return res.redirect("/");
//     }
// }



// module.exports = async function (req, res, next) {
//     try {
//         // retrieve the token from cookies
//         console.log("Retrieved Token: ", req.cookies.token);

//         // check if we have retrieved it or not
//         if (!req.cookies.token) {
//             console.log("You're not authorized to log in");
//             req.flash("error message");
//             req.redirect("/");
//         }

//         // decode the token and find the user
//         try {
//             let decoded;
//             decoded = jwt.decode(req.cookies.token, process.env.JWT_KEY);
//             console.log("Decoded: ", decoded);
//         }
//         catch(err) {
//             console.log("error decoding the user credentials");
//         }

//         // find the user in the DB
//         try {
//             let user = await userModel.findOne({ email: decoded.email}).Select("-password");
//         }
//         catch(err) {
//             console.log("Error retrieving user from db");
//         }
//         // set the user to req.user
//         // next();
//     }
//     catch(err) {}
// }