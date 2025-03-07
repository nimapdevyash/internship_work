const app = require("./src/app");
// const connectToDB = require("./src/db/mongoose");
const { connectToDB } = require("./src/db/sequelize");

connectToDB();

app.listen(3000, () => {
  console.log("app is live on port 3000");
});
