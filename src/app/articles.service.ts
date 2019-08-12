import { Injectable } from "@angular/core";
import { DATA_BANNER } from "./data/dataApp";
import { ArticleData } from "./classes/classes";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

const baseURL: string = "http://localhost:8000/";

@Injectable({
  providedIn: "root"
})
export class ArticlesService {
  constructor(private _http: HttpClient) { }
  default_headers = new HttpHeaders({
    "Content-Type": "text/html"
  });

  getArticles(url: string, params?: object): Observable<any> {
    console.log("params: ", params);
    return this._http.get(baseURL + url, {
      params: { ...params },
      headers: this.default_headers
    });
  }

  getBannerData(): Observable<ArticleData> {
    console.log("getBannerData in service");
    return of(DATA_BANNER);
  }
}
