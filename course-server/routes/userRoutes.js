import express from "express";
import { register, login, logout } from "../controllers/userController.js";

const router = express.Router();

// To register a new user!
router.route("/register").post(register);

// login
router.route("/login").post(login);

// logout
router.route("/logout").post(logout);
// get my profile
// changePassword
// updateProfilePicture
// forgetPassword
// resetPassword
// addToPlaylist
// removeFromPlaylist

export default router;
