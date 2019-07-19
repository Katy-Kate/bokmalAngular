import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToogleIconsComponent } from './toogle-icons.component';

describe('ToogleIconsComponent', () => {
  let component: ToogleIconsComponent;
  let fixture: ComponentFixture<ToogleIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToogleIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToogleIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
