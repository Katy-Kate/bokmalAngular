export class MenuItem {
  name: string;
  path: string;
}

export class ArticleData {
  id: number;
  section: string;
  title: string;
  picture: string;
  addedToFavorite: boolean;
  watches: string;
  publickDate: number;
}

export class HttpParams {
  "page": number;
  "filter": string;
}
