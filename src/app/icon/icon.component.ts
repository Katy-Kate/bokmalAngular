import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],

})
export class IconComponent implements OnInit {

  constructor() {
  }

  @Input() id: string;
  @Input('path') d: string;

  ngOnInit() {
  }

}
