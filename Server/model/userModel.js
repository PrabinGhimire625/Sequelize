import { DataTypes } from "sequelize";
import sequelize from "../connection/sequelize.js";

const User = sequelize.define("User", {
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true, // This ensures the value is a valid email
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default User;
