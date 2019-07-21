import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-article-inf',
  templateUrl: './article-inf.component.html',
  styleUrls: ['./article-inf.component.scss']
})
export class ArticleInfComponent implements OnInit {

  constructor() {
  }

  @Input() publickDate;
  @Input() watches;

  ngOnInit() {
  }

}
