module.exports = mongoose => {
    var ReservationSchema = mongoose.Schema(
      {
        _id: Number,
        _idUser: Number,
        _idHotel: Number,
        _idRoom: Number,
        services: Boolean,
        price: Number,
        dayIn: {
            type: Date,
            default: Date.now
        },
        dayOut: {
            type: Date,
            default: () => new Date(+new Date() + 7*24*60*60*1000)
        },
        state: {
            type: Boolean,
            default: true
        }
    },
      { timestamps: true, versionKey: false }
    );
  
    const Reservation = mongoose.model("reservation", ReservationSchema);
  
    return Reservation;
  };