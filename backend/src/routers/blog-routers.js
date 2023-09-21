const blogRoute = require("express").Router();
const { getAllBlogController } = require("../controllers/blog-controllers");

// GET /api/blog - getting all blog
blogRoute.get("/", getAllBlogController);

module.exports = blogRoute;
