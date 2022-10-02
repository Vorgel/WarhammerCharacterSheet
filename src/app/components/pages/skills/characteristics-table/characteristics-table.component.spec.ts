import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacteristicsTableComponent } from './characteristics-table.component';

describe('CharacteristicsTableComponent', () => {
  let component: CharacteristicsTableComponent;
  let fixture: ComponentFixture<CharacteristicsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacteristicsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacteristicsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
