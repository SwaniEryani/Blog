const express = require("express");
const mongoose = require("mongoose");
const articleRouter = require("./routes/articals");
const app = express();

mongoose.connect("mongodb://localhost:27017/blog", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  const articles = [
    {
      title: "test articles",
      createdAt: new Date(),
      description: "test description ",
    },
    {
      title: "test2 articles",
      createdAt: new Date(),
      description: "test description ",
    },
  ];
  res.render("articles/index", { articles: articles });
});


app.use("/articles", articleRouter);


const port = 5000;

app.listen(port, function() {
  console.log("Server is running on Port: " + port);
});

