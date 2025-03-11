const { body } = require("express-validator");

const registerUserValidator = [
    body("email").isEmail().withMessage("Invalid email format").normalizeEmail(),
    body("password")
        .isLength({ min: 8 }).withMessage("Password must be at least 8 characters")
        .matches(/[A-Z]/).withMessage("Must include one uppercase letter")
        .matches(/[a-z]/).withMessage("Must include one lowercase letter")
        .matches(/[0-9]/).withMessage("Must include one number")
        .matches(/[@$!%*?&]/).withMessage("Must include one special character"),
    body("fullname").notEmpty().withMessage("Full name is required")
];

module.exports = { registerUserValidator };