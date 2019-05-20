import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcavatingComponent } from './excavating.component';

describe('ExcavatingComponent', () => {
  let component: ExcavatingComponent;
  let fixture: ComponentFixture<ExcavatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcavatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcavatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
