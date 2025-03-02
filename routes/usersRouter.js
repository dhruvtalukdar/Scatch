const express = require('express');
const router = express.Router();
const { registerUser, signInUser } = require('../controllers/authController');
const validateRequest = require('../middlewares/validateRequest');
const { registerUserValidator } = require('../validators/authValidator');
// const JWT_SECRET = "your_secret_key";

router.get("/", function (req, res) {
    res.send("hey it's user route");
});  

// register a user
router.post("/register", registerUserValidator, validateRequest, registerUser);

// login a user
router.post("/login", signInUser);


// router.get("/test-password", function (req, res) {

//     const { password } = req.query; 

//     if (!password) {
//         return res.status(400).send("Password is required");
//     }

//     bcrypt.genSalt(10, function (err, salt) {
//         bcrypt.hash(password, salt, function (err, hash) {
//             if (err) return res.send(err.message);
//             else res.send(hash);
//         });
//     });
// })
// // getting all users
// router.get("/getUser", async function (req, res) {
//     try {
//         const users = await userModel.find();
//         res.json(users);
//     }
//     catch (error) {
//         console.error("Error fetching users: ", error);
//     }
// });

// router.get("/test", function (req, res) {
//     try {
//         res.send("Test route");
//     }
//     catch (error) {
//         console.error("Error fetching users: ", error);
//     }
// });

module.exports = router;