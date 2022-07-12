import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPsychologyEffectComponent } from './add-psychology-effect.component';

describe('AddPsychologyEffectComponent', () => {
  let component: AddPsychologyEffectComponent;
  let fixture: ComponentFixture<AddPsychologyEffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPsychologyEffectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPsychologyEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
