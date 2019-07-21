import {Component, OnInit} from '@angular/core';
import {dataArticles} from '../../data/dataApp';


@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  article = dataArticles[1];

  ngOnInit() {
  }

}
