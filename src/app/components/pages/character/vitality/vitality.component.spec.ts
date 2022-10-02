import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VitalityComponent } from './vitality.component';

describe('VitalityComponent', () => {
  let component: VitalityComponent;
  let fixture: ComponentFixture<VitalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VitalityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VitalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
