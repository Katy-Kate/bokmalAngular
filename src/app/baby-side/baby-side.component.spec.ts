import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BabySideComponent } from './baby-side.component';

describe('BabySideComponent', () => {
  let component: BabySideComponent;
  let fixture: ComponentFixture<BabySideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BabySideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabySideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
