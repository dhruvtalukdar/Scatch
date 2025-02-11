const mongoose = require("mongoose");
const config = require("config");

const connectDB = async () => {
    try {
        await mongoose.connect(`${config.get("MONGODB_URI")}/ScatchDB`);
        console.log("MongoDB connected");
    }
    catch (error) {
        console.error("Error connecting to MongoDB: ", error);
        process.exit(1);
    }
}




// const mongoose = require('mongoose');
// const config = require("config");
// const dbgr = require("debug")("development:mongoose");

// mongoose
// .connect(`${config.get("MONGODB_URI")}/scatch`)
// .then(function(){
//     dbgr("connected");
// })
// .catch(function(err){
//     dbgr(err);
// })

module.exports = connectDB;