const express = require("express");
const app = express();
const articles_baby_side = require("./articles.json");
const articles_for_all = require("./articles.json");
const banner_baby_side = require("./articles.json")[0];
const banner_for_all = require("./articles.json")[0];
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
  const pageNumber = req.query.page || 1;
  const filterType = req.query.filter || null;
  const typeOfArticles = req.params.articlesTypeParams;
  const articles = getArticlesByParams(typeOfArticles, filterType, pageNumber)
  res.send(articles);
});

app.get("/banner/:bannerType", function (req, res) {
  const bannerType = req.params.bannerType;
  console.log(bannerType);
  if (bannerType === "for-all") res.send(banner_for_all)
  else if (bannerType === "baby-side") res.send(banner_baby_side);


})


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
  const finishCount = pageNumber === 1 ? OFFSET : OFFSET * pageNumber;
  const startCount = pageNumber === 1 ? 0 : finishCount - OFFSET + 1;
  return articles.filter((item, i) => {
    return i >= startCount && i <= finishCount;
  });
}

function filterArticles(arrOfArticles, filterType) {
  if (filterType === "filterByDate") {
    return arrOfArticles.sort((a, b) => {
      return a.publickDate - b.publickDate;
    });
  }
  else if (filterType === "filterByPopular") {
    return arrOfArticles.sort((a, b) => {
      return a.watches - b.watches;
    });
  }
}


app.listen(8000, () => {
  console.log("Server started!");
});