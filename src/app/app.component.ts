import {Component} from '@angular/core';

const data = {
  id: '1',
  section: '  Корисні статті',
  title: 'Тварини Патріка Джорджа: врятуй їх усіх',
  publickDate: '1 Жовтня, 2017',
  watches: '980',
  addedToFavotite: false,
  picture: 'https://cn.opendesktop.org/img/2/6/8/e/5a86b7241d412a0aef4085d49757d5a7488b.jpg'
};


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bokmal';
  bannerData = data;
}
