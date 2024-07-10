import User from "../model/userModel.js";

// Function to delete a user by ID
export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.destroy({ where: { id: id } });
    if (!user) {
      res.status(404).json({ error: "User not found" });
    } else {
      res.status(200).json({ message: "Successfully deleted user!" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};
