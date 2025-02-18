const userModel = require('../models/user-model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { generateToken } = require('../utils/generateToken');


module.exports.registerUser = async function (req, res) {
    try {
        let { email, password, fullname} = req.body;

        // check if user already exists
        const user = await userModel.findOne({ email });

        if (user) {
            return res.status(400).send("User already exists");
        }

        // password hashing
        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(password, salt, async function (err, hash) {
                if (err) return res.send(err.message);
                else {
                    let createdUser = await userModel.create({
                        email,
                        password : hash,
                        fullname
                    });
                    let token = generateToken(createdUser);
                    res.cookie("token", token);
                    res.status(201).send(createdUser);
                    console.log("User registered successfully");
                };
            });
        });

        // // Generating token
        // let token = jwt.sign(
        //     { userId: "123456", email: "createduser@gmail.com" }, 
        //     JWT_SECRET
        //     // { expiresIn: "1h" } // Token valid for 1 hour
        // );

        // res.send(token);

        // res.status(201).json({ user: createdUser, token });
        // console.log("User registered successfully");
    }
    catch (err) {
        res.status(400).json(err);
        console.log(err.message);
    }
}

module.exports.signInUser = async function (req, res) {
    try {
        let { email, password } = req.body;

        // check if user exists
        let user = await userModel.findOne({ email });

        if(!user) return res.status(400).send("Invalid email or password");

        bcrypt.compare(password, user.password, function (err, result) {
            if (!result) return res.status(400).send("Invalid email or password");
            else {
                let token = generateToken(user);
                res.cookie("token", token);
                res.send("user logged in successfully");
                res.send(token);
            }
            if (err) return res.send(err.message);

        });
    }
    catch (err) {
        res.status(400).json(err);
        console.log(err.message);
    }
};