import {Component, OnInit} from '@angular/core';
import {data, dataArticles} from '../data/dataApp';
import {ArticleData} from '../classes/classes';

@Component({
  selector: 'app-baby-side',
  templateUrl: './baby-side.component.html',
  styleUrls: ['./baby-side.component.scss']
})
export class BabySideComponent implements OnInit {

  articles: ArticleData[];


  bannerData = data;
  articlesData = dataArticles;

  getArticles = () => {
    return;
  }

  setArticles = (articles) => {
    this.articles = articles;
  }

  sortByDate = () => {
    return;
  }

  sortByPopularity = () => {
    return;
  };

  ngOnInit() {
  }


}
