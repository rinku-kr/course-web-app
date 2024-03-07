import express from "express";
import { register } from "../controllers/userController.js";

const router = express.Router();

// To register a new user!
router.route("/register").post(register);

// login
// logout
// get my profile
// changePassword
// updateProfilePicture
// forgetPassword
// resetPassword
// addToPlaylist
// removeFromPlaylist

export default router;
