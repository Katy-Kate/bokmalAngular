import {Component, OnInit, Input} from '@angular/core';
import {GET_DATE} from '../../../data/dataApp';


@Component({
  selector: 'app-item-preview',
  templateUrl: './item-preview.component.html',
  styleUrls: ['./item-preview.component.scss']
})
export class ItemPreviewComponent implements OnInit {

  @Input() article;
  publickDate;

  ngOnInit() {
    this.publickDate = GET_DATE(this.article.publickDate);
  }
}
