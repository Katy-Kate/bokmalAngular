import { Component, OnInit, Input } from '@angular/core';
import { GET_DATE } from '../../data/dataApp';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor() {
  }

  @Input() data;
  publickDate;

  ngOnInit() {
    this.publickDate = GET_DATE(this.data.publickDate);
  }

}
