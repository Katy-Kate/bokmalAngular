import {Component, OnInit, Input} from '@angular/core';
import {MenuItem} from '../classes/classes';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  host: {'class': 'menu'}
})
export class MenuComponent implements OnInit {

  constructor() {
  }

  @Input() menu: MenuItem[];

  ngOnInit() {
  }

}
