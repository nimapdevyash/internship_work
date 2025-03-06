const app = require("./src/app");
const connectToDB = require("./src/db/mongoose");

connectToDB();

app.listen(3000, () => {
  console.log("app is live on port 3000");
});
