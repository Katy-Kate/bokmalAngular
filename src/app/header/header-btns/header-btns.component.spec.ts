import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBtnsComponent } from './header-btns.component';

describe('HeaderBtnsComponent', () => {
  let component: HeaderBtnsComponent;
  let fixture: ComponentFixture<HeaderBtnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderBtnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderBtnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
