import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header-btns',
  templateUrl: './header-btns.component.html',
  styleUrls: ['./header-btns.component.scss'],
  host: {'class': 'header__icons '}
})
export class HeaderBtnsComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
