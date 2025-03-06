const express = require("express");
const bulkRouter = require("./routes/routes");

const app = express();

app.use(express.json());
app.use("/bulk", bulkRouter);

app.get("/", (req, res) => {
  res.send("abhi hum jinda hain....");
});

module.exports = app;
