const db = require("../models");
const Reservation = db.reservation;

exports.create = (req, res) => {
    const reservation = new Reservation({
        _id: req.body._id,
        _idUser: req.body._idUser,
        _idHotel: req.body._idHotel,
        _idRoom: req.body._idRoom,
        services: req.body.services,
        dayIn: req.body.dayIn,
        dayOut: req.body.dayOut,
        state: req.body.state
    });

    reservation.save(reservation).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Error: Something failed trying to create the reservation."
        });
    });
};

exports.findOne = (req, res) => {
    const _id = req.body._id;
    Reservation.findById(_id).then(data => {
        if (!data)
            res.status(404).send({ message: "Reservation not found with id " + _id });
        else res.send(data);
    }).catch(err => {
        res.status(500).send({ message: "Error retrieving Reservation with id " + _id })
    })
};

exports.delete = (req, res) => {
    const _id = req.body._id;

    Reservation.findByIdAndRemove(_id, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Reservation with id ${_id}. Reservation not found!`
                });
            } else {
                res.send({
                    message: "Reservation was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Reservation with id " + _id
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

    Reservation.findByIdAndUpdate(_id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Reservation with id ${_id}. Reservation not found!`
                });
            } else res.send({ message: "Reservation was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Reservation with id " + _id
            });
        });
};