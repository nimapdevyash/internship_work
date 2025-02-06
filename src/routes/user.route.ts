import express from "express";
import {
  createUser,
  getUserByUserName,
  updateUser,
  deleteUser,
} from "../controllers/user.controller";

const router = express.Router();

router
  .get("/:userName", getUserByUserName)
  .post("/", createUser)
  .put("/:userName", updateUser)
  .delete("/:userName", deleteUser);

export default router;
