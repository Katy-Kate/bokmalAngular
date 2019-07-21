import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconSerchComponent } from './icon-serch.component';

describe('IconSerchComponent', () => {
  let component: IconSerchComponent;
  let fixture: ComponentFixture<IconSerchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconSerchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconSerchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
