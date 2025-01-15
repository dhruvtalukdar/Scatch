const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        minLength: 3,
        trim: true,
    },
    email: String,
    password: String, 
    products: {
        type: Array,
        default: []
    },
    picture: String,
    gstin: String,
});

module.exports = mongoose.model("user", userSchema);