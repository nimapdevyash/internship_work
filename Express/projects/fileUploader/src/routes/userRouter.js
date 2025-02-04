import express from "express";
import {
  createUser,
  updateUser,
  deleteUser,
  loginUser,
  logoutUser,
  getCurrentUser,
} from "../controllers/user.js";

const router = express.Router();

router
  .route("/")
  .get(getCurrentUser)
  .post(createUser)
  .put(updateUser)
  .delete(deleteUser);

router.route("/login").post(loginUser);

router.route("/logout").get(logoutUser);

export default router;
