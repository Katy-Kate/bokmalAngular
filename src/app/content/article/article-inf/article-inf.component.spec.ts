import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleInfComponent } from './article-inf.component';

describe('ArticleInfComponent', () => {
  let component: ArticleInfComponent;
  let fixture: ComponentFixture<ArticleInfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleInfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleInfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
