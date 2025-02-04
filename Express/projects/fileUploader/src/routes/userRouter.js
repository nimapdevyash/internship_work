import loadUser from "../middlewares/loadUser.js";
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
  .get(loadUser, getCurrentUser)
  .post(createUser)
  .put(loadUser, updateUser);

router.route("/:userName").delete(loadUser, deleteUser);
router.route("/login").post(loginUser);
router.route("/logout").get(loadUser, logoutUser);

export default router;
