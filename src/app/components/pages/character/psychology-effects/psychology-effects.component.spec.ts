import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychologyEffectsComponent } from './psychology-effects.component';

describe('PsychologyEffectsComponent', () => {
  let component: PsychologyEffectsComponent;
  let fixture: ComponentFixture<PsychologyEffectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsychologyEffectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PsychologyEffectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
