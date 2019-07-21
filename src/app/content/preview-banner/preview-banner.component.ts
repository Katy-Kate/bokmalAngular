import { Component, OnInit } from '@angular/core';
import {dataArticles} from '../../data/dataApp';

@Component({
  selector: 'app-preview-banner',
  templateUrl: './preview-banner.component.html',
  styleUrls: ['./preview-banner.component.scss']
})
export class PreviewBannerComponent implements OnInit {

  article = dataArticles[1];

  ngOnInit() {
  }

}
