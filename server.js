var express = require("express");
var app = express();

var fs = require("fs");
var articles_baby_side = fs.readFileSync("articles.json");

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  next();
});

app.get("/articles/baby-side", function(req, res) {
  console.log("hi");
  res.send(articles_baby_side);
});

app.listen(8000, () => {
  console.log("Server started!");
});
