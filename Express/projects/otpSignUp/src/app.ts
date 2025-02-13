import express from "express";
import { signUp, verifyOtp } from "./controller/user";

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.post("/signup", signUp);
app.post("/verify", verifyOtp);

app.get("/", (req, res) => {
  res.status(200).json({
    sucess: true,
    message: "server is working fine...",
  });
});

export default app;
