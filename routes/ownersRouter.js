const express = require('express');
const router = express.Router();
const ownerModel = require("../models/owner-model");

console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === 'development') {
router.post("/create", async function(req, res) {
    // check if there is already an owner in the database

    // debugging
    try {
        console.log("Checking database connection...");
        let owners = await ownerModel.find();
        if (owners.length > 0) {
            return res
            .status(502)
            .send("You don't have permission to create a new owner");
        }
        res.send("we can create a new owner");
    }
    catch (error) {
        console.error("Error fetching pwners: ", error);
        res.status(500).send("Internal server error");
    }

    // create a new owner
    let {fullname, email, password} = req.body;

    let createdOwner = await ownerModel.create({
        fullname,
        email,
        password,
    });

    res.status(201).send(createdOwner);
    // res.send("hey it's working");
})};



router.get("/getOwner", async function (req, res) {
    try {
        const owners = await ownerModel.find();
        res.json(owners);
    }
    catch (error) {
        console.error("Error fetching owners: ", error);
        res.status(500).send("Internal server error");
    }
});  


// if(process.env == "development") {
//     router.post("/create", function (req, res) {
//         res.send("hey it's working");
//     });
// }

// if (process.env.NODE_ENV === 'production') {
//     console.log('Running in production mode');
// } else if (process.env.NODE_ENV === 'development') {
//     console.log(process.env.NODE_ENV);
//     router.post("/create", async function(req, res) {
//         let owners = await ownerModel.find();
//         if (owners.length > 0) {
//             return res
//             .send(503)
//             .send("You don't have permission to create a new owner");
//         }
    
//         let {fullname, email, password} = req.body;
    
//         let createdUser = await ownerModel.create({
//             fullname,
//             email,
//             password, 
//         })
//         res.status(201).send(createdUser);
//     })
// } else {
//     console.log('Running in unknown mode');
// }


module.exports = router;