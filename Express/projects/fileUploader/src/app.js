import express from "express";
import connectToDB from "./db/index.js";
import User from "./models/user.js";
import File from "./models/file.js";
import cookieParser from "cookie-parser";

const app = express();

connectToDB();

User.hasMany(File);
File.belongsTo(User);

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send(new Date().toLocaleDateString());
});

export default app;
