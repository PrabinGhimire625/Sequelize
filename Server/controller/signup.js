import User from "../model/userModel.js";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
    const newUser = await User.create({
      userName,
      email,
      password: hashedPassword,
    });
    res.status(200).json({message: "New user is created successfully!", newUser})
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).send("Error creating user");
  }
};
