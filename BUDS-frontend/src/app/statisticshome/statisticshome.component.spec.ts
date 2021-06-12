import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticshomeComponent } from './statisticshome.component';

describe('StatisticshomeComponent', () => {
  let component: StatisticshomeComponent;
  let fixture: ComponentFixture<StatisticshomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticshomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
