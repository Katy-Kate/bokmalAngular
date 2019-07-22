import {Component, OnInit, Input} from '@angular/core';
import {ArticleData} from '../../classes/classes';

@Component({
  selector: 'app-grid-preview',
  templateUrl: './grid-preview.component.html',
  styleUrls: ['./grid-preview.component.scss']
})
export class GridPreviewComponent implements OnInit {

  @Input() articles: ArticleData;

  ngOnInit() {
  }


}
