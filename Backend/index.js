const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const cors = require("cors");

const Signup = require("./models/signupSchema");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("MongoDB Connection Successful"))
  .catch((err) => console.error("MongoDB Connection Failed:", err));

// Default Route
app.get("/", (req, res) => {
  res.send("Welcome to Backend my friend!  Your Rollercoaster starts now!");
});

// Serve Static Files
app.get("/static", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Signup Route
app.post("/signup", async (req, res) => {
  try {
    const { firstName, lastName, username, email, password } = req.body;
    
    if (!firstName || !lastName || !username || !email || !password) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    // Check if user already exists
    const existingUser = await Signup.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new Signup({
      firstName,
      lastName,
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: "Signup successful!" });

  } catch (err) {
    res.status(500).json({ message: "Signup failed!", error: err.message });
  }
});

// Login Route
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Signup.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found!", loginStatus: false });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: "Incorrect password!", loginStatus: false });
    }

    res.status(200).json({ message: "Login successful!", loginStatus: true });

  } catch (err) {
    res.status(500).json({ message: "Error during login", error: err.message });
  }
});

// Get All Signup Details
app.get("/getsignupdet", async (req, res) => {
  try {
    const signUpDetails = await Signup.find();
    res.status(200).json(signUpDetails);
  } catch (err) {
    res.status(500).json({ message: "Error fetching signup details", error: err.message });
  }
});

// Update User Details
app.put("/updateuser", async (req, res) => {
  try {
    const { id, ...updates } = req.body;

    const updatedUser = await Signup.findByIdAndUpdate(id, updates, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found!" });
    }

    res.status(200).json({ message: "User details updated successfully!" });

  } catch (err) {
    res.status(500).json({ message: "Error updating user details", error: err.message });
  }
});

// Delete User
app.delete("/deleteuser", async (req, res) => {
  try {
    const { id } = req.body;

    const deletedUser = await Signup.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found!" });
    }

    res.status(200).json({ message: "User deleted successfully!" });

  } catch (err) {
    res.status(500).json({ message: "Error deleting user", error: err.message });
  }
});

// Start Server
app.listen(3001, () => console.log("🚀 Server Started on Port 3001"));
