const express = require("express");
const scheduleTask = require("./static_schedule");
const dynamicSchedule = require("./dynamic_schedule");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("server is live...");
});

app.get("/dynamic", dynamicSchedule);

module.exports = app;
