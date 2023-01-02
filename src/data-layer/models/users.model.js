const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: [true, "name is required"] },
  age: {
    type: String,
    required: [true, "age is required"],
  },
});

module.exports = mongoose.model("user", userSchema);
