const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
    require: true,
  },
});

let User = mongoose.model("User", userSchema);

module.exports = User;
