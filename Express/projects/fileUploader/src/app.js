import express from "express";
import connectToDB from "./db/index.js";
import User from "./models/user.js";
import File from "./models/file.js";
import cookieParser from "cookie-parser";
import { fileRouter, userRouter } from "./routes/index.js";

const app = express();

connectToDB();

File.sync({ force: true });
User.sync({ force: true });

User.hasMany(File, { foreignKey: { name: "owner" } });
File.belongsTo(User, { foreignKey: { name: "owner" } });

app.use(express.json());
app.use(cookieParser());

app.use("/user", userRouter);
app.use("/file", fileRouter);

app.get("/", (req, res) => {
  res.send("app is working fine");
});

export default app;
