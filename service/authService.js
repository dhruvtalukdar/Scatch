const userModel = require("../models/user-model");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../utils/generateToken");

async function registerUser(email, password, fullname) {
    try {
        // check if user already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            throw new Error("User already exists");
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        

        // Create user
        const createdUser = await userModel.create({
            email,
            password: hashedPassword,
            fullname
        });

        // Generate token
        const token = generateToken(createdUser);
        return { user: createdUser, token };
    }
    catch (err) {
        throw err;
    }
};

async function signInUser(email, password) {
    try {
        // check if user exists
        const user = await userModel.findOne({ email });
        if (!user) {
            throw new Error("Invalid email or password");
        }

        // compare password
        const isMatch = bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new Error("Invalid email or password");
        }

        // Generate token
        const token = generateToken(user);
        return { user, token };
    }
    catch(error) {
        throw error;
    }
}

module.exports = { registerUser, signInUser };