import { DataTypes } from "sequelize";
import { sequelize } from "../db";

const User = sequelize.define("user", {
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  otp: {
    type: DataTypes.INTEGER,
  },
  verified: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default User;
