const express = require("express");

const { sequelize, connectToDb, cheakDBHealth } = require("./db");

const app = express();

connectToDb();

app.get("/", (req, res) => {
  res.send("abhi hum jinda hai...");
});

app.get("/db", cheakDBHealth);

app.listen(3000, () => {
  console.log("app is live on port 3000");
});
