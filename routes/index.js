const express = require("express");
const router = express.Router();

// router.get("/", (req, res) => {
//     // let error = req.flash("error");
//     // res.render("index", { error });
//     res.send(body: 'Welcome to the Subscription Tracker API!');
// });

router.get("/random", (req, res) => {
    res.send("req.body.json()");
})

module.exports = router;