const express = require("express");
const app = express();
const articles_baby_side = require("./articles.json");
const articles_for_all = require("./articles.json");
const OFFSET = 12;

app.use(function (req, res, next) {
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

app.get("/articles/:articlesTypeParams", function (req, res) {
  let pageNumber = req.query.page || 1;
  let filterType = req.query.filter || null;
  let typeOfArticles = req.params.articlesTypeParams;
  let articles = getArticlesByParams(typeOfArticles, filterType, pageNumber)
  res.send(articles);
});

function getArticlesByParams(typeOfArticles, filterType, pageNumber) {

  let sending_articles;
  if (typeOfArticles == "baby-side") sending_articles = articles_baby_side;
  else if (typeOfArticles == "for-all") sending_articles = articles_for_all;

  if (filterType) {
    filterArticles(sending_articles, filterType);
  }

  return getArticlesByPage(sending_articles, pageNumber);

}

function getArticlesByPage(articles, pageNumber) {
  let finishCount = pageNumber === 1 ? OFFSET : OFFSET * pageNumber;
  let startCount = pageNumber === 1 ? 0 : finishCount - OFFSET + 1;

  return articles.filter((item, i) => {
    return i >= startCount && i <= finishCount;
  });
}

function filterArticles(arrOfArricles, filterType) {
  if (filterType === "filterByDate") {
    return arrOfArricles.sort((a, b) => {
      return a.publickDate - b.publickDate;
    });
  }
  else if (filterType === "filterByPopular") {
    return arrOfArricles.sort((a, b) => {
      return a.watches - b.watches;
    });
  }
}


app.listen(8000, () => {
  console.log("Server started!");
});