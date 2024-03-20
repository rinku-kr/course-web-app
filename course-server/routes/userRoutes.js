import express from "express";
import {
  register,
  login,
  logout,
  getMyProfile,
} from "../controllers/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

// To register a new user!
router.route("/register").post(register);

// login
router.route("/login").post(login);

// logout
router.route("/logout").post(logout);
// get my profile
router.route("/me").get(isAuthenticated, getMyProfile);
// changePassword
// updateProfilePicture
// forgetPassword
// resetPassword
// addToPlaylist
// removeFromPlaylist

export default router;
