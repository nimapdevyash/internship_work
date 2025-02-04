import express from "express";
import { uploadFile, deleteFile, getUserFiles } from "../controllers/file.js";

const router = express.Router();

router.route("/").get(getUserFiles).post(uploadFile).delete(deleteFile);

export default router;
