const db = require("../models");
const Contrat = db.contrat;

// Create and Save a new Contrat
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    // Create a Contrat
    const contrat = new Contrat({
        PropertyId: req.body.PropertyId,
        UserID: req.body.UserID,
        DebutDate: req.body.DebutDate,
        FinDate: req.body.FinDate,
    });

    // Save Contrat in the database
    contrat
        .save(contrat)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Contract."
            });
        });
};

// Retrieve all User from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

    Contrat.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving contract."
            });
        });
};

// Find a single Contrat with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Contrat.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Contract with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Contract with id=" + id });
        });
};

// Update a Contrat by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    Contrat.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update contract with id=${id}. Maybe contract was not found!`
                });
            } else res.send({ message: "Contract was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating contract with id=" + id
            });
        });
};
// Delete a Contrat with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Contrat.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Contract with id=${id}. Maybe Contract was not found!`
                });
            } else {
                res.send({
                    message: "Contract was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Contract with id=" + id
            });
        });
};

// Delete all Contrat from the database.
exports.deleteAll = (req, res) => {
    Contrat.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} Contract were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all contracts."
            });
        });
};