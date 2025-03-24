const express = require("express");

subscriptionRouter = express.Router();

subscriptionRouter.get("/", (req, res) => {
    res.send("Welcome to the Subscription Tracker API!");
});

subscriptionRouter.get('/:id', (req, res) => {
    res.send(body={title: "Subscription Details", id: req.params.id});
});

subscriptionRouter.post('/', (req, res) => {
    res.send(body={title: "Create Subscription"});
});

subscriptionRouter.put('/:id', (req, res) => {
    res.send(body={title: "Update Subscription", id: req.params.id});
});

subscriptionRouter.delete('/:id', (req, res) => {
    res.send(body={title: "Delete Subscription", id: req.params.id});
});

module.exports = subscriptionRouter