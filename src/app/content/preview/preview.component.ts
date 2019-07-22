import {Component, OnInit, Input} from '@angular/core';
import {ArticleData} from '../../classes/classes';


@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  @Input() article: ArticleData;

  ngOnInit() {
  }

}
