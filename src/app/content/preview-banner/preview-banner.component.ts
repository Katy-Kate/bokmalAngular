import {Component, OnInit, Input} from '@angular/core';
import {ArticleData} from '../../classes/classes';

@Component({
  selector: 'app-preview-banner',
  templateUrl: './preview-banner.component.html',
  styleUrls: ['./preview-banner.component.scss']
})
export class PreviewBannerComponent implements OnInit {

  @Input() article: ArticleData;

  ngOnInit() {
  }

}
