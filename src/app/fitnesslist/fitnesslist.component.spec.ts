import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnesslistComponent } from './fitnesslist.component';

describe('FitnesslistComponent', () => {
  let component: FitnesslistComponent;
  let fixture: ComponentFixture<FitnesslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitnesslistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FitnesslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
