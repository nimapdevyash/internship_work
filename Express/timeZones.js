import express from "express";
import moment from "moment-timezone";

const app = express();
const port = 3000;

// Timezones to display the current time
const timezones = [
  "IST", // India
  "America/New_York", // Eastern Time (US)
  "Europe/London", // London
  "Asia/Tokyo", // Tokyo
  "PLT", // Pakistan
];

app.get("/", (req, res) => {
  const currentTimes = timezones.map((timezone) => {
    return {
      timezone: timezone,
      current_time: moment().tz(timezone).format("YYYY-MM-DD HH:mm:ss"),
    };
  });

  res.json(currentTimes);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
