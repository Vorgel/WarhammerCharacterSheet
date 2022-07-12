import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychologyEffectComponent } from './psychology-effect.component';

describe('PsychologyEffectComponent', () => {
  let component: PsychologyEffectComponent;
  let fixture: ComponentFixture<PsychologyEffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsychologyEffectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PsychologyEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
