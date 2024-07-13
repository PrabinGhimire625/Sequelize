import User from "../model/userModel.js";
export const getSingleUser = async (req, res) => {
  try {
    const id = req.params.id;
    // const {id} = req.params;
    const user = await User.findByPk(id); // Use findByPk for Sequelize
    if (!user) {
      res.status(404).json({ message: "User not found" });
    } else {
      res
        .status(200)
        .json({ message: "Single user is successfully fetched!", data: user });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error!" });
  }
};

