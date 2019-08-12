const express = require("express");
const app = express();
const articles_baby_side = require("./articles.json");
const articles_for_all = require("./articles.json");
const OFFSET = 12;

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

app.get("/articles/:articlesTypeParams", function(req, res) {
  let pageNumber = req.query.page || 1;
  console.log("------------pageNumber", pageNumber);
  let typeOfArticles = req.params.articlesTypeParams;
  console.log("------------pageNumber", typeOfArticles);
  let sending_articles;
  if (typeOfArticles == "baby-side") sending_articles = articles_baby_side;
  else if (typeOfArticles == "for-all") sending_articles = articles_for_all;

  let filteredArticlesByPage = getArticlesByPage(sending_articles, pageNumber);
  res.send(filteredArticlesByPage);
});

app.listen(8000, () => {
  console.log("Server started!");
});

function getArticlesByPage(articles, pageNumber) {
  let finishCount = pageNumber === 1 ? OFFSET : OFFSET * pageNumber;
  let startCount = pageNumber === 1 ? 0 : finishCount - OFFSET + 1;

  console.log("startCount", startCount);
  console.log("finishCount", finishCount);

  return articles.filter((item, i) => {
    return i >= startCount && i <= finishCount;
  });
}
