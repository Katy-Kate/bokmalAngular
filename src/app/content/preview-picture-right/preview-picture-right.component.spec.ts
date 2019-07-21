import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewPictureRightComponent } from './preview-picture-right.component';

describe('PreviewPictureRightComponent', () => {
  let component: PreviewPictureRightComponent;
  let fixture: ComponentFixture<PreviewPictureRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewPictureRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewPictureRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
