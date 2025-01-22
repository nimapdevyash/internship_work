import express from "express";
import { WebSocketServer } from "ws";

const app = express();

const server = app.listen(8080, () =>
  console.log("app is listening on port : 8080")
);

const wss = new WebSocketServer({ server });

wss.on("connection", (client) => {
  client.on("message", (data) => {
    console.log(data.toString());
    client.send("reply from websocket");
  });
});
