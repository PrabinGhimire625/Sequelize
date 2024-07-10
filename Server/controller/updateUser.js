import User from "../model/userModel.js";

export const updateUser = async (req, res) => {
  const id = req.params.id;
  const { userName, email, password } = req.body; // Use camelCase for consistency
  try {
    const [updatedRows] = await User.update({ userName, email, password },{ where: { id: id } });

    if (!updatedRows) {
      return res.status(404).json({ error: "User not found" });
    }
    const updatedUser = await User.findByPk(id);
    res.status(200).json({ message: "Successfully updated user!", data: updatedUser });
  } catch (err) {
    console.error("Error updating user:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};
