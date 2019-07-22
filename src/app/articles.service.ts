import {Injectable} from '@angular/core';
import {DATA_ARTICLES, DATA_BANNER} from './data/dataApp';
import {ArticleData} from './classes/classes';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor() {
  }

  getArticles(): Observable<ArticleData[]> {
    console.log('getArticles in service');
    return of(DATA_ARTICLES);
  }

  getBannerData(): Observable<ArticleData> {
    console.log('getBannerData in service');
    return of(DATA_BANNER);
  }

}
