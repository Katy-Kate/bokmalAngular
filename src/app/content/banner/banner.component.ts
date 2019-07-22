import {Component, OnInit, Input} from '@angular/core';


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
    console.log('data', this.data);
  }

}