import express from "express";
import router from "./routes/user.route";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", router);

app.get("/", (req, res) => {
  res.status(200).json({
    sucess: true,
    message: "app is working fine",
  });
});

export default app;
