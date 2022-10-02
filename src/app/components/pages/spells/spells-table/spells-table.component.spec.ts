import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellsTableComponent } from './spells-table.component';

describe('SpellsTableComponent', () => {
  let component: SpellsTableComponent;
  let fixture: ComponentFixture<SpellsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpellsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpellsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
