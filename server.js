const express = require("express");
const mongoose = require("mongoose");
const Article = require('./models/article');
const articleRouter = require("./routes/articals");
const methodOverride = require('method-override');
const app = express();

mongoose.connect("mongodb://localhost:27017/blog", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.set('useCreateIndex', true);

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

app.get("/", async (req, res) => {
  const articles = await Article.find().sort({
  })
  res.render("articles/index", { articles: articles });
});


app.use("/articles", articleRouter);


const port = 5000;

app.listen(port, function() {
  console.log("Server is running on Port: " + port);
});

