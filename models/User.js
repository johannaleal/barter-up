const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  password: {
    type: String,
    required: true,
  },
  userRating: {
    type: Number,
    required: false
  },
  zipcode: {
    type: Number,
    match: [/(^\d{5}$)|(^\d{5}-\d{4}$)/, "Please enter a valid zipcode"],
    required: false
  },

});

const User = mongoose.model("User", userSchema);

module.exports = User;
