const express = require('express');
const router = express.Router();
const userModel = require('../models/user-model');

router.get("/", function (req, res) {
    res.send("hey it's user route");
});  

// register a user
router.post("/register", function (req, res) {
    try {
        let { email, password, fullname} = req.body;

        let createdUser = userModel.create({
            email,
            password,
            fullname
        });
        res.status(201).send(createdUser);
        console.log("User registered successfully");
    }
    catch (err) {
        res.status(400).json(err);
        console.log(err.message);
    }
});

// getting all users
router.get("/getUser", async function (req, res) {
    try {
        const users = await userModel.find();
        res.json(users);
    }
    catch (error) {
        console.error("Error fetching users: ", error);
    }
});

module.exports = router;