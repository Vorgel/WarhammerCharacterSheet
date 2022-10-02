import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncantationsTableComponent } from './incantations-table.component';

describe('IncantationsTableComponent', () => {
  let component: IncantationsTableComponent;
  let fixture: ComponentFixture<IncantationsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncantationsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncantationsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
