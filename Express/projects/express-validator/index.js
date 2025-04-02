const express = require("express");
const { validationResult } = require("express-validator");

const app = express();

function handler(req, res) {
  res.send("no errors ha");
}

function middleware(req, res, next) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.json(errors);
  }

  next();
}

const cheaks = ["ema"];

app.get("/", (req, res) => res.send("mama told me i am a good boy"));

app.route("/validation").all(cheaks, middleware, handler);

app.listen(3000, () => console.log("app is live.........."));
