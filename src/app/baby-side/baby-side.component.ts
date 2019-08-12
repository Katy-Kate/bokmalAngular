import { Component, OnInit } from "@angular/core";
import { ArticlesService } from "../articles.service";

@Component({
  selector: "app-baby-side",
  templateUrl: "./baby-side.component.html",
  styleUrls: ["./baby-side.component.scss"],
})
export class BabySideComponent implements OnInit {
  constructor(private articleService: ArticlesService) { }

  articles = [];
  bannerData = this.articles ? this.articles[0] : null;

  getArticles(url: string, params: object): void {
    this.articleService.getArticles(url, params).subscribe(articles => {
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
    this.getArticles("articles/baby-side", {
      "page": 1,
      "filter": "filterByDate",
    });
  }

}
