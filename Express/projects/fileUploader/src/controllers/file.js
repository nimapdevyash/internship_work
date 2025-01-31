import uploadOnCloudinary from "../services/cloudinary";
import File from "../models/file.js";

// upload
async function uploadFile(req, res) {
  try {
    const userName = req.user.userName;

    const file = req?.file;

    if (!file) {
      throw new Error("file is not available locally");
    }

    const url = uploadOnCloudinary(file);

    const response = await File.create({ url, userName });

    if (!response) {
      throw new Error("couldn't upload a file");
    }

    return res.status(201).json({
      sucess: true,
      message: "file uploaded sucessfully",
      image: {
        id: response.id,
        url,
      },
    });
  } catch (error) {
    console.log("error while uploading the file ", error);
  }
}

// delete
async function deleteFile() {
  try {
    const imageId = req.params;

    const file = File.findOne({
      where: {
        id: imageId,
      },
    });

    if (!file) {
      throw new Error("invalid imageId");
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
  }
}

// all file for a particular user
async function getUserFiles() {
  try {
    const userName = req.user.userName;

    if (!userName) {
      throw new Error("unothorized user");
    }

    const { count, files } = await File.findAndCountAll({ where: userName });

    res.status(200).json({
      sucess: true,
      message: "images fetched sucessfully",
      count,
      files,
    });
  } catch (error) {
    console.log("error while fetching files for a user ", error);
  }
}

export { uploadFile, deleteFile, getUserFiles };
