import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';


import { MatTableDataSource } from '@angular/material/table';
import { IIncantation } from 'src/app/interfaces/IIncantation';
import { IncantationService } from 'src/app/services/pages/spells/incantation.service';

@Component({
  selector: 'app-spells-table',
  templateUrl: './spells-table.component.html',
  styleUrls: ['./spells-table.component.scss']
})

export class SpellsTableComponent implements OnInit, AfterViewInit  {
  @Input() characterID: number;
  spells: IIncantation[];

  columndefs: string[] = ['name', 'spellLevel', 'rangeInMeters', 'targetsAmount', 'duration', 'effect'];

  constructor(private incantationService: IncantationService) { }

  ngOnInit(): void {
    this.incantationService.getIncantationsByCharacterID(this.characterID)
      .subscribe((incantations) => { 
        this.spells = incantations.filter( i => i.incantationType === 0); 
      })
  }

  ngAfterViewInit() { }
}
