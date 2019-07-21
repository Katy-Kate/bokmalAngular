import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconCtrlComponent } from './icon-ctrl.component';

describe('IconCtrlComponent', () => {
  let component: IconCtrlComponent;
  let fixture: ComponentFixture<IconCtrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconCtrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconCtrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
