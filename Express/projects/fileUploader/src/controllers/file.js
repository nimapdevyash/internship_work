import {
  uploadOnCloudinary,
  removeOnCloudinary,
} from "../services/cloudinary.js";
import File from "../models/file.js";
import fs from "fs";

// upload
async function uploadFile(req, res) {
  try {
    const userName = req.user.userName;

    const file = req?.file;

    if (!file) {
      throw new Error("file is not available locally");
    }

    const filePath = file.path;

    const { secure_url, public_id } = await uploadOnCloudinary(filePath);

    if (!secure_url) {
      throw new Error("invalid file url ");
    }

    fs.unlinkSync(filePath);

    const response = await File.create({
      url: secure_url,
      owner: userName,
      public_id,
    });

    if (!response) {
      throw new Error("couldn't upload a file");
    }

    return res.status(201).json({
      sucess: true,
      message: "file uploaded sucessfully",
      image: {
        id: response.id,
        owner: response.owner,
        public_id,
        url: secure_url,
      },
    });
  } catch (error) {
    console.log("error while uploading the file ", error);
    res.status(500).json({
      sucess: false,
      message: error.message,
    });
  }
}

// delete
async function deleteFile(req, res) {
  try {
    const imageId = req.params.imageId;
    const userName = req.user.userName;

    const file = await File.findOne({
      where: {
        id: imageId,
      },
    });

    if (!file) {
      throw new Error("invalid imageId");
    }

    if (file.owner !== userName) {
      return res.status(400).json({
        sucess: false,
        message: "unothorized access",
      });
    }

    const public_id = file.public_id;

    if (!public_id) {
      throw new Error("invalid image , no Public_id");
    }

    const isRemoved = await removeOnCloudinary(public_id);

    if (!isRemoved) {
      throw new Error("image not deleted on cloudinary");
    }

    const response = await File.destroy({
      where: {
        id: imageId,
      },
    });

    if (!response) {
      throw new Error("couldn't delete a file");
    }

    res.status(200).json({
      sucess: true,
      message: "file deleted sucessfully",
    });
  } catch (error) {
    console.log("error while deleting a file ", error);
    res.status(500).json({
      sucess: false,
      message: error.message,
    });
  }
}

// all file for a particular user
async function getUserFiles(req, res) {
  try {
    const userName = req.user.userName;

    if (!userName) {
      throw new Error("unothorized user");
    }

    const { count, rows: files } = await File.findAndCountAll({
      where: { owner: userName },
    });

    res.status(200).json({
      sucess: true,
      message: "images fetched sucessfully",
      count,
      files,
    });
  } catch (error) {
    console.log("error while fetching files for a user ", error);
    res.status(500).json({
      sucess: false,
      message: error.message,
    });
  }
}

export { uploadFile, deleteFile, getUserFiles };
