const express = require("express");
const dotenv = require("dotenv");
const connectToDatabase = require("./src/config/db");
const blogRoute = require("./src/routers/blog-routers");

dotenv.config();
const app = express();

// dastabase configuration
connectToDatabase();

// middlewares
app.use(express.json());

// all routes
app.use("/api/blog", blogRoute);

// app is starting on the port
app.listen(process.env.APP_PORT, () => {
  console.log("App is starting on port " + process.env.APP_PORT);
});
