module.exports = mongoose => {
  var UserSchema = mongoose.Schema(
    {
      _id: Number,
      username: {
          type: String,
          unique: true
      },
      name: String,
      surname: String,
      email: {
          type: String,
          unique: true
      },
      password: String,
      image: {
          type: String,
          default: null
      },
      isAdmin: {
          type: Boolean,
          default: false
      },
      isActive: {
          type: Boolean,
          default: true
      },
      birthDate: {
          type: Date,
          default: null
      }
  },
    { timestamps: true, versionKey: false }
  );

  const User = mongoose.model("user", UserSchema);

  return User;
};
