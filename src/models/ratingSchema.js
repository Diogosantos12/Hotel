module.exports = mongoose => {
    var RatingSchema = mongoose.Schema(
      {
        _id: Number,
    },
      { timestamps: true, versionKey: false }
    );
  
    const Rating = mongoose.model("rating", RatingSchema);
  
    return Rating;
  };