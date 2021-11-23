module.exports = app => {
  const properties = require("../controllers/properties.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", properties.create);

  // Retrieve all Tutorials
  router.get("/", properties.findAll);

  // Retrieve a single Tutorial with id
  router.get("/:id", properties.findOne);

  // Update a Tutorial with id
  router.put("/:id", properties.update);

  // Delete a Tutorial with id
  router.delete("/:id", properties.delete);

  // Create a new Tutorial
  router.delete("/", properties.deleteAll);

  app.use('/api/properties', router);
};