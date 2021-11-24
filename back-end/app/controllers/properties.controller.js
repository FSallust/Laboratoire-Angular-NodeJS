const db = require("../models");
const Properties = db.properties;

// Create and Save a new Properties
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    // Create a Properties
    const properties = new Properties({
        Titre: req.body.Titre,
        ProprioId: req.body.ProprioId,
        PetiteDescription: req.body.PetiteDescription,
        LongueDescription: req.body.LongueDescription,
        Pays: req.body.Pays,
        Ville: req.body.Ville,
        Rue: req.body.Rue,
        Num: parseInt(req.body.Num),
        CodePostal: parseInt(req.body.CodePostal),
        PictureUrl: req.body.PictureUrl,
        Capacite: parseInt(req.body.Capacite),
        SDB: parseInt(req.body.SDB),
        WC: parseInt(req.body.WC),
        Jardin: req.body.Jardin,
        Piscine: req.body.Piscine,
        MachineALaver: req.body.MachineALaver,
        Internet: req.body.Internet,
        AnimauxAdmis: req.body.AnimauxAdmis,
        PrixNuit: parseInt(req.body.PrixNuit),
        Assurance: req.body.Assurance
    });

    // Save Properties in the database
    properties
        .save(properties)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Properties."
            });
        });
};

// Retrieve all Properties from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

    Properties.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving properties."
            });
        });
};

// Find a single Properties with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Properties.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Properties with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Properties with id=" + id });
        });
};

// Update a Properties by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    Properties.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Properties with id=${id}. Maybe Properties was not found!`
                });
            } else res.send({ message: "User was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating User with id=" + id
            });
        });
};
// Delete a Properties with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Properties.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Properties with id=${id}. Maybe Properties was not found!`
                });
            } else {
                res.send({
                    message: "Properties was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Properties with id=" + id
            });
        });
};

// Delete all Properties from the database.
exports.deleteAll = (req, res) => {
    Properties.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} Properties were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all properties."
            });
        });
};