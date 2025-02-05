import { v2 as cloudinary } from "cloudinary";

async function uploadOnCloudinary(filePath) {
  try {
    const response = await cloudinary.uploader.upload(filePath, {
      unique_filename: true,
    });

    if (!response) {
      throw new Error("file not uploaded correctlly");
    }

    const public_id = response.public_id;
    const secure_url = response.secure_url;

    return { public_id, secure_url };
  } catch (error) {
    console.log("error while uploading file : ", error);
  }
}

async function removeOnCloudinary(public_id) {
  try {
    const response = await cloudinary.uploader.destroy(public_id);

    if (response.result !== "ok") {
      throw new Error("file not deleted correctlly");
    }

    return true;
  } catch (error) {
    console.log("error while uploading file : ", error);
    return false;
  }
}

export { removeOnCloudinary, uploadOnCloudinary };
