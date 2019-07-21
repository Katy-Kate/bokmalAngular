import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconParagraphLeftComponent } from './icon-paragraph-left.component';

describe('IconParagraphLeftComponent', () => {
  let component: IconParagraphLeftComponent;
  let fixture: ComponentFixture<IconParagraphLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconParagraphLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconParagraphLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
