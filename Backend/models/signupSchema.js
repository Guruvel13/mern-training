const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, { timestamps: true }); 

const Signup = mongoose.model("Signup", signupSchema);

module.exports = Signup;
