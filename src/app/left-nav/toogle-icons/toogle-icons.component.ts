import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-toogle-icons',
  templateUrl: './toogle-icons.component.html',
  styleUrls: ['./toogle-icons.component.scss'],
  host: {'class': 'toogle-icons'}
})
export class ToogleIconsComponent implements OnInit {

  constructor() {
  }

  @Input() toggleLeftMenu;
  @Input() isOpen: boolean;

  ngOnInit() {
  }

}
