import User from "../model/userModel.js";

export const profile = async (req, res) => {
    try {
        const userData = req.user;
        const userId = userData.id;
        const user = await User.findByPk(userId); 
        res.status(200).json({ message:"Successfully display the profile",data:user }); 
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
