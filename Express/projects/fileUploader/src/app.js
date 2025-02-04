import express from "express";
import connectToDB from "./db/index.js";
import User from "./models/user.js";
import File from "./models/file.js";
import cookieParser from "cookie-parser";
import { fileRouter, userRouter } from "./routes/index.js";
import loadUser from "./middlewares/loadUser.js";

const app = express();

connectToDB();

User.hasMany(File);
File.belongsTo(User);

app.use(express.json());
app.use(cookieParser());

app.use("/user", userRouter);
app.use("/file", loadUser, fileRouter);

app.get("/", (req, res) => {
  res.send("app is working fine");
});

export default app;
