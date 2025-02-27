const cron = require("node-cron");
let { job, task } = require("./cron");

function scheduleTask(expression) {
  if (!cron.validate(expression)) {
    return false;
  }

  if (job) {
    job.stop();
  }

  job = cron.schedule(expression, task, {
    scheduled: true,
  });

  return true;
}

module.exports = scheduleTask;
