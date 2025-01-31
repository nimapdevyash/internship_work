import express from "express";

// NOTE: to avoid this recursive behavior reurn the next() call

const app = express();

function firstMiddleware(req, res, next) {
  console.log("first middleware called");
  next();
  console.log("strill inside first middleware");
}

function secondMiddleware(req, res, next) {
  console.log("second middleware called");
  next();
  console.log("second middleware after next call");
}

app.get("/", firstMiddleware, secondMiddleware, (req, res) => {
  console.log("inside controller");
  res.end("response from controller");
  console.log("inside controller after the response is sent");
});

app.listen(3000, () => {
  console.log("app is listening....");
});
