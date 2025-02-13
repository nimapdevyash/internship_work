import app from "./src/app";
import connectToDB from "./src/db";
import User from "./src/modules/user";
import dotenv from "dotenv";

dotenv.config();

connectToDB();
User.sync({ force: true });

app.listen(3000, () => {
  console.log("app is live on port 3000");
});
