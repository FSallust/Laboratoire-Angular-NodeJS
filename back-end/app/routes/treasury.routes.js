module.exports = app => {
    const treasury = require("../controllers/treasury.controller.js");

    var router = require("express").Router();

    // Retrieve all treasury
    router.get("/", treasury.findAll);

    // Update a treasury with id
    router.put("/:id", treasury.update);

    // Delete a treasury with id
    router.delete("/:id", treasury.delete);

    // Delete all new treasury
    router.delete("/", treasury.deleteAll);

    app.use('/api/treasury', router);
};