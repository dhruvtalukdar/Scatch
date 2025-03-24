const express = require('express');
const router = express.Router();
const { registerUser, signInUser, getAllUsers } = require('../controllers/authController');
const validateRequest = require('../middlewares/validateRequest');
const isLoggedIn = require('../middlewares/isLoggedIn');
const { registerUserValidator } = require('../validators/authValidator');
// const JWT_SECRET = "your_secret_key";

router.get("/", function (req, res) {
    res.send("hey it's user route");
});  

// register a user
router.post("/register", registerUserValidator, validateRequest, registerUser);

// login a user
router.post("/login", signInUser);

//protected route
router.get("/about", isLoggedIn, (req, res) => {
    res.send(`Welcome ${req.user.fullname}, you are logged in!`);
})

// get all users
router.get("/get-all-users", getAllUsers);


module.exports = router;