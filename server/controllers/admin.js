import User from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import {} from "dotenv/config";

const adminController = {

  //admin login
  login: async (req, res) => {
    const { email, password } = req.body;

    // Check for user email
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      if (user.role !== "admin") {
        return res.status(401).json({ msg: "Unauthorized access" });
      }

      res.json({
        _id: user.id,
        name: user.name,
        email: user.email,
        userName: user.userName,
        role: user.role,
        token: generateToken(user._id),
      });
    } else {
      return res.status(400).json({ msg: "Invalid credentials" });
    }
  },

  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.json({ message: "Users fetch success", data: users });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },

  getUserById: async (req, res) => {
    const id = req.params.id;
    try {
      const user = await User.findOne({ _id: id });
      res.json({ message: "User fetch success", data: user });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },

  updateUser: async (req, res) => {
    try {
      const id = req.params.id;
      const { firstName, lastName, userName, role, email, password } = req.body;

      await User.findOneAndUpdate(
        { _id: id },
        { firstName, lastName, userName, role, email, password }
      );
      res.json({
        message: "User update success",
        data: { firstName, lastName, userName, role, email, password },
      });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },

  deleteUser: async (req, res) => {
    try {
      const id = req.params.id;

      await User.findByIdAndDelete({ _id: id });
      res.json({ message: "Delete success!" });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
  getDashboard: async (req, res) => {
    try {
      // Check if the user is authenticated as an admin
      if (req.user && req.user.role === "admin") {
        // Redirect to the admin dashboard
        res.redirect("/admin/dashboard");
      } else {
        // If the user is not authenticated as an admin, send a 403 Forbidden response
        res.status(403).json({ message: "Unauthorized" });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
};

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

export default adminController;
