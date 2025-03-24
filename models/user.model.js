const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
        minLength: [2, "Name must be atleast 2 characters long"],
        maxLength: [30, "Name must not exceed 30 characters"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        trim: true,
        lowercase: true,
        // match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, "Please enter a valid email"]
        match: [/\S+@\S+\.\S+/, 'Please fill a valid email address'],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minLength: [6, "Password must be atleast 6 characters long"],
    },
}, { timestamps: true });

// const User = mongoose.model("User", userSchema);

// export default User;

module.exports = mongoose.model("User", userSchema);