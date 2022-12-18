module.exports = app => {
  const ensureAuth = require('../middlewares/ensureAuth')
  const reservation = require("../controllers/ReservationController.js");
  const user = require("../controllers/UserController.js");
  const hotel = require("../controllers/HotelController.js");
  const room = require("../controllers/RoomController.js");
  const router = require("express").Router();

  //falta adicionar o middleware ensureAuth às respetivas rotas

  //users

  router.post("/user", user.create);
  router.get("/user", user.findOne);
  router.patch("/user", user.update);
  router.delete("/user", user.delete);

  //rooms

  router.post("/room", room.create);
  router.get("/room", room.findOne);
  router.patch("/room", room.update);
  router.delete("/room", room.delete);

  //reservations

  router.post("/reservation", reservation.create);
  router.get("/reservation", reservation.findOne);
  router.patch("/reservation", reservation.update);
  router.delete("/reservation", reservation.delete);

  //hotels

  router.post("/hotel", hotel.create);
  router.get("/hotel", hotel.findOne);
  router.patch("/hotel", hotel.update);
  router.delete("/hotel", hotel.delete);

  app.use("", router);
};