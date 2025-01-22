import express from "express";
import cookieParser from "cookie-parser";

const app = express();

// default middlewares
app.use(express.json());
app.use(cookieParser);

app.get("/", (req, res) => {
  res.send("the app is working fine....");
});

export default app;
