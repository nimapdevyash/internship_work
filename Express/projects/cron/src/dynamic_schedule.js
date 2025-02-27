const scheduleTask = require("./static_schedule");

function dynamicSchedule(req, res) {
  const userExpression = req.body.expression;

  if (!userExpression) {
    return res.send("expression is required");
  }

  let isrescheduled = scheduleTask(userExpression);

  if (!isrescheduled) {
    return res.status(500).send("unable to reshedule task");
  }

  res.send("cron added successfully");
}

module.exports = dynamicSchedule;
