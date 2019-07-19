import {Component, OnInit, Input} from '@angular/core';
import {MenuItem} from '../classes/classes';


@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss']
})
export class DropdownMenuComponent implements OnInit {

  constructor() {
  }

  @Input() menu: MenuItem[];
  isOpenMenu: boolean = false;

  togglDropdownMenu = () => {
    this.isOpenMenu = !this.isOpenMenu ;
  }

  ngOnInit() {
  }

}
