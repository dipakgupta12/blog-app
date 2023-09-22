const blogRoute = require("express").Router();
const {
  getAllBlogController,
  getOneBlogController,
} = require("../controllers/blog-controllers");
const { checkIdMiddleware } = require("../middlewares/blog-middlewares");

// GET /api/blog - getting all blog
blogRoute.get("/", getAllBlogController);

// GET /api/blog/:id - getting a specific blog
blogRoute.get("/:id", checkIdMiddleware, getOneBlogController);

module.exports = blogRoute;
