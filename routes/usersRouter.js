const express = require('express');
const router = express.Router();
const userModel = require('../models/user-model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { generateToken } = require('../utils/generateToken');
const { registerUser, signInUser } = require('../controllers/authController');
// const JWT_SECRET = "your_secret_key";

router.get("/", function (req, res) {
    res.send("hey it's user route");
});  

// register a user
router.post("/register", registerUser);

router.post("/sign-in", signInUser);


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