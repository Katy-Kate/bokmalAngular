import {Component, OnInit, Input} from '@angular/core';
import {ArticleData} from '../../classes/classes';
import {GET_DATE} from '../../data/dataApp';


@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  @Input() article: ArticleData;

  publickDate;

  ngOnInit() {
    this.publickDate = GET_DATE(this.article.publickDate);
  }

}
