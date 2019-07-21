import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortBlockComponent } from './sort-block.component';

describe('SortBlockComponent', () => {
  let component: SortBlockComponent;
  let fixture: ComponentFixture<SortBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
