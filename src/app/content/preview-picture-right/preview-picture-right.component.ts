import { Component, OnInit } from '@angular/core';
import {dataArticles} from '../../data/dataApp';

@Component({
  selector: 'app-preview-picture-right',
  templateUrl: './preview-picture-right.component.html',
  styleUrls: ['./preview-picture-right.component.scss']
})
export class PreviewPictureRightComponent implements OnInit {

  article = dataArticles[1];

  ngOnInit() {
  }

}
