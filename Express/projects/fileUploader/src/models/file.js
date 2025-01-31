import { DataTypes } from "sequelize";
import { sequelize } from "../db/index.js";

const File = sequelize.define(
  "File",
  {
    fileName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

File.sync({ force: true });

export default File;
