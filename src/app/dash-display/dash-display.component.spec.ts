import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashDisplayComponent } from './dash-display.component';

describe('DashDisplayComponent', () => {
  let component: DashDisplayComponent;
  let fixture: ComponentFixture<DashDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
