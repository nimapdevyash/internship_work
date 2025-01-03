import express from "express";
import cluster from "cluster";
import os from "os";
import process from "process";

// NOTE: the primary concern is that if the worker or child process finishes it's work before you send another request the same worker or child process will handle that request too and it'll feel like it's not doing multiprocessing, but in fact if you were to provide the necessary work load to keep that worker busy while you send the another request then another worker will handle that request .

// this code is executed 5 times as a whole , 1 time by parent process and 4 times by child processes . chiled processes will execute else part while parent will execute if part .

// there are going to be 4 child processes as there are 4 cores in this computer but that may vary based on the cpu architecture of the current computer in use .

if (cluster.isPrimary) {
  // if this is a primary process then create the child processes or workers
  const numberOfCPUs = os.availableParallelism();

  console.log(`Number of available CPUs : ${numberOfCPUs}`);

  for (let it = 1; it <= numberOfCPUs; it++) {
    cluster.fork();
  }

  // if any worker or child process dies log it
  cluster.on("exit", (worker, code, signal) => {
    console.log(`${worker.process.pid} died`);
  });
} else {
  // if not then just make it live

  const PORT = 8000;
  const app = express();

  app.get("/", (req, res) => {
    // we use this loop to simulate the load , so that we may get more time to send the request to the server
    for (let it = 0; it < 99999; it++) {}

    res.status(200).json({
      "Parent Process Id ": process.ppid,
      "process Id": process.pid,
    });
  });

  app.listen(PORT, () => {
    console.log(`${process.pid} is live on ${PORT}`);
  });
}
