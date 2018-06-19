import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportGenarationComponent } from './report-genaration.component';

describe('ReportGenarationComponent', () => {
  let component: ReportGenarationComponent;
  let fixture: ComponentFixture<ReportGenarationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportGenarationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportGenarationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
