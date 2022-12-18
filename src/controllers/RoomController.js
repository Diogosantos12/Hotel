const db = require("../models");
const Room = db.room;

exports.create = (req, res) => {
    const room = new Room({
        _id: req.body._id,
        _idHotel: req.body._idHotel,
        roomQuantity: req.body.roomQuantity,
        state: req.body.state,
        floor: req.body.floor,
        type_room: req.body.type_room,
        description: req.body.description
    });
    Room.save(room).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Error: Something failed trying to create the room."
        });
    });
};

exports.findOne = (req, res) => {
    const _id = req.body._id;
    Room.findById(_id).then(data => {
        if (!data)
            res.status(404).send({ message: "Room not found with id " + _id });
        else res.send(data);
    }).catch(err => {
        res.status(500).send({ message: "Error retrieving Room with id " + _id })
    })
};

exports.delete = (req, res) => {
    const _id = req.body._id;

    Room.findByIdAndRemove(_id, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Room with id ${_id}. Room not found!`
                });
            } else {
                res.send({
                    message: "Room was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Room with id " + _id
            });
        });
};

exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const _id = req.body._id;

    Room.findByIdAndUpdate(_id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Room with id ${_id}. Room not found!`
                });
            } else res.send({ message: "Room was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Room with id " + _id
            });
        });
};

// Encontrar quartos filtrados, com o id do hotel ou sem
// Encontrar todos os quartos, com o id do hotel