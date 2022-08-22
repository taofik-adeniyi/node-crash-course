const express = require("express");
const { getBlogs, getABlog, createBlog, deleteBlog, getBlogForm  } = require("../controller/blog");
const router = express.Router();

// blogs route

// gets all blog posts
router.get("/", getBlogs);

// create a blog
router.post("/", createBlog);

// blog form page
router.get("/create", getBlogForm);

// get blog by id
router.get("/:id", getABlog);


router.delete("/:id", deleteBlog);

module.exports = router;
