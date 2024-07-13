import User from "../model/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { jwtAuthMiddleware, generateToken } from "../jwt.js"; // Import jwtAuthMiddleware


dotenv.config();

const jwtSecret = process.env.JWT_SECRET;

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).send("User not found");
    }

    // Compare the password with the hashed password stored in the database
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).send("Invalid credentials");
    }
     //generate token
     const payload = {
      id: User.id,
      username: User.username,
    };
    const token = generateToken(payload);
    res.json({ token });
    
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).send("Error logging in");
  }
};
