import { Component, OnInit } from "@angular/core";
import { ArticleData } from "../classes/classes";
import { ArticlesService } from "../articles.service";
import { OPTIONS_DATA_FORMAT } from "../data/dataApp";

@Component({
  selector: "app-baby-side",
  templateUrl: "./baby-side.component.html",
  styleUrls: ["./baby-side.component.scss"]
})
export class BabySideComponent implements OnInit {
  constructor(private articleService: ArticlesService) {}

  articles = [];
  bannerData = this.articles ? this.articles[0] : null;

  getArticles(url: string): void {
    this.articleService.getArticles(url).subscribe(articles => {
      console.log("response", articles);
      this.articles.push(articles);
    });
  }

  getBannerData(): void {
    this.articleService
      .getBannerData()
      .subscribe(bannerData => (this.bannerData = bannerData));
  }

  ngOnInit() {
    this.getBannerData();
    this.getArticles("articles/baby-side");
  }

  sortByDate = () => {
    this.articles.sort((a, b) => {
      return a.publickDate - b.publickDate;
    });
  };

  sortByPopularity = () => {
    return;
  };
}
