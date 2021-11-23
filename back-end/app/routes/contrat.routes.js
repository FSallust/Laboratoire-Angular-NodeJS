module.exports = app => {
    const contrat = require("../controllers/contrat.controller.js");

    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/", contrat.create);

    // Retrieve all Tutorials
    router.get("/", contrat.findAll);

    // Retrieve a single Tutorial with id
    router.get("/:id", contrat.findOne);

    // Update a Tutorial with id
    router.put("/:id", contrat.update);

    // Delete a Tutorial with id
    router.delete("/:id", contrat.delete);

    // Create a new Tutorial
    router.delete("/", contrat.deleteAll);

    app.use('/api/contrat', router);
};