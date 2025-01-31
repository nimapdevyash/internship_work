import express from "express";

// NOTE: to avoid this recursive behavior reurn the next() call

const app = express();

function firstMiddleware(req, res, next) {
  console.log("first middleware called");
  next();
  // can't modify the response at this point as the headers are already have been sent to the client , if uncommented below code it'll throw an error
  // res.json("response from firstMiddleware");
  console.log("inside first middleware after next call");
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
