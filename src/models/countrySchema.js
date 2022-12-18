module.exports = mongoose => {
    var CountrySchema = mongoose.Schema(
      {
        _id: Number,
    },
      { timestamps: true, versionKey: false }
    );
  
    const Country = mongoose.model("country", CountrySchema);
  
    return Country;
  };