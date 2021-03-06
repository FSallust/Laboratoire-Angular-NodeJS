const db = require("../models");
const Treasury = db.treasury;

// Retrieve all Treasury from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

    Treasury.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving treasury."
            });
        });
};

// Update a Treasury by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    Treasury.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update contract with id=${id}. Maybe treasury was not found!`
                });
            } else res.send({ message: "Treasury was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating treasury with id=" + id
            });
        });
};

// Delete all Treasury from the database.
exports.deleteAll = (req, res) => {
    Treasury.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} Treasury were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all treasuries."
            });
        });
};