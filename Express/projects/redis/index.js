const server = require("./src/app");
const { connectToRedis } = require("./src/redis");

connectToRedis();

server.listen(3000, () => console.log("server is live on 3000"));
