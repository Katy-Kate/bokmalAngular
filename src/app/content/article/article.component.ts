import {Component, OnInit, Input} from '@angular/core';
import {GET_DATE} from '../../data/dataApp';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  constructor() {
  }

  @Input() data;
  publickDate;

  ngOnInit() {
    this.publickDate = GET_DATE(this.data.publickDate);
  }

}
