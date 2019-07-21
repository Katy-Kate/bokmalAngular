import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconCrossComponent } from './icon-cross.component';

describe('IconCrossComponent', () => {
  let component: IconCrossComponent;
  let fixture: ComponentFixture<IconCrossComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconCrossComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconCrossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
