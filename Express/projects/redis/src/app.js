const express = require("express");
const { add, remove, update, get } = require("./redis/index");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("abhi hum jinda hai...");
});

app.route("/redis").get(get).put(update).delete(remove).post(add);

module.exports = app;
