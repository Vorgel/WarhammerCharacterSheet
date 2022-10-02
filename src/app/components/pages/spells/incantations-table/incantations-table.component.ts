import { Component, Input, OnInit } from '@angular/core';
import { IIncantation } from 'src/app/interfaces/IIncantation';
import { IncantationService } from 'src/app/services/pages/spells/incantation.service';

@Component({
  selector: 'app-incantations-table',
  templateUrl: './incantations-table.component.html',
  styleUrls: ['./incantations-table.component.scss']
})
export class IncantationsTableComponent implements OnInit {
  @Input() characterID: number;
  incantations: IIncantation[];
  
  columndefs: string[] = ['name', 'spellLevel', 'rangeInMeters', 'targetsAmount', 'duration', 'effect'];
  constructor(private incantationService: IncantationService) { }

  ngOnInit(): void {
    this.incantationService.getIncantationsByCharacterID(this.characterID)
      .subscribe((incantations) => { 
        this.incantations = incantations.filter( i => i.incantationType === 1); 
      })
  }
}
