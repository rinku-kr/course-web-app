import ErrorHandler from "../utils/ErrorHandler.js";
import { catchAsyncError } from "./catchAsyncError.js";
import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";

export const isAuthenticated = catchAsyncError(async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) return next(new ErrorHandler("Not logged In", 401));

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await User.findById(decoded._id);
  next();
});
