module.exports = mongoose => {
    var CittySchema = mongoose.Schema(
      {
        _id: Number,
    },
      { timestamps: true, versionKey: false }
    );
  
    const Citty = mongoose.model("citty", CittySchema);
  
    return Citty;
  };