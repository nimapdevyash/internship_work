import { configDotenv } from "dotenv";
import app from "./src/app.js";

configDotenv();

app.listen(process.env.PORT, () => {
  console.log("app is listening on : ", process.env.PORT);
});
