const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../db/sequelize.js");

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      require: true,
    },
    age: {
      type: DataTypes.INTEGER,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

User.sync({ force: true });

module.exports = User;
