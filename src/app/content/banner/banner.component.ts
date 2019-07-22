import {Component, OnInit, Input} from '@angular/core';
import {GET_DATA} from '../../data/dataApp';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  host: {'class': 'banner'}
})
export class BannerComponent implements OnInit {

  constructor() {
  }

  @Input() data;


  ngOnInit() {
  }

}
