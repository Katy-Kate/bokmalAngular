import {Component, OnInit} from '@angular/core';
import {MenuItem} from '../../classes/classes';
import {menuListChangeTheme, menu} from '../../data/dataApp';

@Component({
  selector: 'app-header-navigation',
  templateUrl: './header-navigation.component.html',
  styleUrls: ['./header-navigation.component.scss'],
  host: {'class': 'header__navigation'}
})
export class HeaderNavigationComponent implements OnInit {

  menuChangeTheme: MenuItem[] = menuListChangeTheme;
  menu: MenuItem[] = menu;

  ngOnInit() {
  }

}
