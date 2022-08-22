const express = require("express");
const path = require("path");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require('./routes/blogs')
// express app
const app = express();
//register view engine

const dbUri = "mongodb://localhost:27017/node-crash-course";
const dbUri2 = "mongodb+srv://localhost:27017";
// mongodb+srv://taofik:password@localhost/?authMechanism=DEFAULT
// mongodb+srv://taofik:oauujcle@localhost/?authMechanism=DEFAULT
// 127.0.0.1
// mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true}).then(result => {
mongoose
  .connect(dbUri)
  .then((result) => {
    console.log("Connection success");
    app.listen(3000, () => {
      console.log("app listens on port: 3000");
    });
  })
  .catch((err) => {
    console.log("error: " + err);
  });
app.set("view engine", "ejs");
// app.set('views', 'my-views')
// view engine checks the views dir as default for ejs html files

// listen for requests

// middleware and static files
app.use(express.static("public"));
app.use(express.urlencoded({extended: true})) //not compulsory extended: true
app.use(morgan("dev"));

// app.use((req, res, next) => {
//     console.log('request was made');
//     console.log('hostname', req.hostname);
//     console.log('path', req.path);
//     console.log('method', req.method);
//     next()
// })

app.get("/add-blog", (req, res) => {
  const blog = new Blog({
    title: "new blog 2",
    snippet: "about my new blog",
    body: "about my lates new blog",
  });

  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log("error", err);
    });
});

app.get("/all-blogs", (req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log("error", err);
    });
});

app.get("/single-blog", (req, res) => {
  Blog.findById("62f9554eac7cb0b742150f79")
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log("err", err);
    });
});

app.get("/", function (req, res) {
  // res.status(200).send('<p>hello</p>')
  // res.sendFile(path.join(__dirname, './docs/client-server/views/index.html'))
  // res.sendFile('./views/index.html', { root: __dirname })
  // res.send('<p>Welcome to me!</p>')
  // const blogs = [
  //   {
  //     title: "Blog One",
  //     snippet: "Lorem ipsum dolor sit amet consectetur.",
  //   },
  //   {
  //     title: "Blog Two",
  //     snippet: "Lorem ipsum dolor sit amet consectetur.",
  //   },
  //   {
  //     title: "Blog Three",
  //     snippet: "Lorem ipsum dolor sit amet consectetur.",
  //   },
  // ];
  // res.render("index", { title: "Blog Bomber", blogs });
  res.redirect("/blogs");
});

// app.use((req, res, next) => {
//     console.log('in the next middleware!');
//     next()
// })

app.get("/about", function (req, res) {
  // res.send('<p>about to me!</p>')
  // res.sendFile('./views/about.html', { root: __dirname })
  res.render("about", { title: "About Blog Bomber" });
});

//redirect

app.get("/about-us", (req, res) => {
  res.redirect("/about");
  // res.render('about')
});

//blog routes
app.use('/blogs', blogRoutes)
//404
app.use((req, res) => {
  res.status(404);
  // res.sendFile(path.join(__dirname, './views/404.html'))
  res.render("404", { title: "404! Blog Bomber" });
});
