const { body } = require("express-validator");

exports.registerUserValidator = [
    body("email").isEmail().withMessage("Email is required"),
    body("password").isLength({ min: 6 }).withMessage("Password must be atleast 6 characters long"),
    body("fullname").isLength({ min: 3 }).withMessage("Fullname is required")
]