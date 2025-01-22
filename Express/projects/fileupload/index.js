import app from "./src/app.js";
import connectToDB from "./src/database/index.js";
import dotenv from "dotenv";

dotenv.config();
connectToDB();

app.listen(process.env.PORT, () => {
  console.log("app is listening on PORT : ", process.env.PORT);
});
