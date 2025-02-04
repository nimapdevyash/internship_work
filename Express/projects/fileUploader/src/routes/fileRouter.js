import express from "express";
import { uploadFile, deleteFile, getUserFiles } from "../controllers/file.js";
import upload from "../middlewares/multer.js";

const router = express.Router();

router
  .route("/")
  .get(getUserFiles)
  .post(upload.single("file"), uploadFile)
  .delete(deleteFile);

export default router;
