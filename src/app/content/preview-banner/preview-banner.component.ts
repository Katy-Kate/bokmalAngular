import {Component, OnInit, Input} from '@angular/core';
import {ArticleData} from '../../classes/classes';
import {GET_DATE} from '../../data/dataApp';

@Component({
  selector: 'app-preview-banner',
  templateUrl: './preview-banner.component.html',
  styleUrls: ['./preview-banner.component.scss']
})
export class PreviewBannerComponent implements OnInit {

  @Input() article: ArticleData;
  publickDate;

  ngOnInit() {
    this.publickDate = GET_DATE(this.article.publickDate);
  }

}
