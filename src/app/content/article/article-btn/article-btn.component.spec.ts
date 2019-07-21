import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleBtnComponent } from './article-btn.component';

describe('ArticleBtnComponent', () => {
  let component: ArticleBtnComponent;
  let fixture: ComponentFixture<ArticleBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
