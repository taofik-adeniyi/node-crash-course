const Blog = require("../model/blog");

//author
//categories


const getBlogs = (req, res) => {
    Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("blog/index", { title: "All Blogs", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
}

const getABlog = (req, res) => {
    const id = req.params.id;
    console.log("id", id);
    Blog.findById(id)
      .then((result) => {
        res.render("blog/detail", { title: "Blog Details", blog: result });
      })
      .catch((err) => {
        console.log(err);
        res.render("404", { title: "Not Found"})
      });
}

const getBlogForm = (req, res) => {
    res.render("blog/create", { title: "Create Blog Bomber" });
}

const createBlog = (req, res) => {
    const blog = new Blog({
        title: req.body.title,
        snippet: req.body.snippet,
        body: req.body.body,
      });
      blog
        .save()
        .then((result) => {
          res.redirect("/blogs");
        })
        .catch((err) => {
          console.log(err);
        });
}

const deleteBlog = (req, res) => {
    const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({
        redirect: "/blogs",
      });
    })
    .catch((err) => {
      console.log(err);
    });
}
module.exports =  {
    getBlogs, getABlog, getBlogForm, createBlog, deleteBlog
}