import express from "express";
import dotenv from "dotenv";

dotenv.config({
  path: "./config/config.env",
});

const app = express();

// Importing & Using Routes!
import course from "./routes/courseRoutes.js";
import user from "./routes/userRoutes.js";

app.use("/api/v1/", course);
app.use("/api/v1/", user);

export default app;
