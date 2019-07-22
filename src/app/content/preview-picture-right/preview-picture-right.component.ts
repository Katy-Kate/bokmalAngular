import {Component, OnInit, Input} from '@angular/core';
import {GET_DATE} from '../../data/dataApp';

@Component({
  selector: 'app-preview-picture-right',
  templateUrl: './preview-picture-right.component.html',
  styleUrls: ['./preview-picture-right.component.scss']
})
export class PreviewPictureRightComponent implements OnInit {

  @Input() article;
  publickDate;

  ngOnInit() {
    this.publickDate = GET_DATE(this.article.publickDate);
  }
}
