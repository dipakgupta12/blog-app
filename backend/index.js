const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

// middlewares
app.use(express.json());

// routes
app.get("/api/blog", (req, res) => {
  try {
    return res.status(200).json({ success: true, message: "OK" });
  } catch (err) {
    return res
      .status(200)
      .json({ success: false, message: "Something went wrong" });
  }
});

// app is starting on the port
app.listen(process.env.APP_PORT, () => {
  console.log("App is starting on port " + process.env.APP_PORT);
});
