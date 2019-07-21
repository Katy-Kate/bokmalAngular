import {Component, OnInit} from '@angular/core';
import {dataArticles} from '../../data/dataApp';

@Component({
  selector: 'app-grid-preview',
  templateUrl: './grid-preview.component.html',
  styleUrls: ['./grid-preview.component.scss']
})
export class GridPreviewComponent implements OnInit {

  data = [dataArticles[1], dataArticles[2], dataArticles[3]];

  ngOnInit() {
  }


}
