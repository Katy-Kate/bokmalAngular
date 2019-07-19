import {Component, OnInit} from '@angular/core';
import {leftMenu} from '../data/dataApp';
import {MenuItem} from '../classes/classes';


@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss'],
  host: {'class': 'left-nav'}
})
export class LeftNavComponent implements OnInit {

  constructor() {
  }

  isOpen: boolean = false;

  menu: MenuItem[] = leftMenu;
  toggleLeftMenu = () => this.isOpen = !this.isOpen;


  ngOnInit() {
  }

}
