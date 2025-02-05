import express from "express";
import { uploadFile, deleteFile, getUserFiles } from "../controllers/file.js";
import upload from "../middlewares/multer.js";
import loadUser from "../middlewares/loadUser.js";

const router = express.Router();

router
  .route("/")
  .get(loadUser, getUserFiles)
  .post(loadUser, upload.single("fileToUpload"), uploadFile);

router.route("/:imageId").delete(loadUser, deleteFile);

export default router;
