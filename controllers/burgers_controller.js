var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/burger", function (req, res) {
    burger.insertOne(["burger_name"], [req.body.burger_name], function (result) {
        // Send back the ID of the new quote
        res.redirect("/");

    });
});
router.post("/burger/:id", function (req, res) {
    const idBurger = "id = " + req.params.id;
    burger.updateOne({ devoured: true }, idBurger, function (result) {
        // Send back the ID of the new quote
        if (result.changedRows == 0) {
            // Return 404 error if no rows were changed.
            return res.status(404).end();
        } else {
            res.redirect("/");
        }
    });
});


// Export routes for server.js to use.
module.exports = router;
