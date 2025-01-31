import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

async function uploadOnCloudinary(file) {
  try {
    const response = await cloudinary.uploader.upload(file, {
      unique_filename: true,
    });

    if (!response) {
      throw new Error("file not uploaded correctlly");
    }

    fs.unlinkSync(file);

    return response.secure_url;
  } catch (error) {
    console.log("error while uploading file : ", error);
  }
}

export default uploadOnCloudinary;
