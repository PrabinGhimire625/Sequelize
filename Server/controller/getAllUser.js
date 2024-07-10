import User from "../model/userModel.js";

//function to fetch the user from the database
export const getAllUser = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json({ message: "Users fetched successfully", data: users });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};
