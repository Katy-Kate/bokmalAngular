import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-preview-picture-right',
  templateUrl: './preview-picture-right.component.html',
  styleUrls: ['./preview-picture-right.component.scss']
})
export class PreviewPictureRightComponent implements OnInit {

  @Input() article;

  ngOnInit() {
  }

}
