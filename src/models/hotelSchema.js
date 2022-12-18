module.exports = mongoose => {
    var HotelSchema = mongoose.Schema(
      {
        _id: Number,
        name: String,
        location: String,
        description: String,
        image: String,
        rating_avg: {
          type: Number, 
          default: 5
        }
    },
      { timestamps: true, versionKey: false }
    );
  
    const Hotel = mongoose.model("hotel", HotelSchema);
  
    return Hotel;
  };