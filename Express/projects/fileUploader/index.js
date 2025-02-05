import { configDotenv } from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import app from "./src/app.js";

configDotenv();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

app.listen(process.env.PORT, () => {
  console.log("app is listening on : ", process.env.PORT);
});
