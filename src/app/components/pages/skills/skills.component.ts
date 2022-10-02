import { Component, Directive, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICharacteristics } from 'src/app/interfaces/ICharacteristic';
import { CharacterSheetService } from 'src/app/services/character-sheet.service';
import { CharacteristicsService } from 'src/app/services/pages/skills/characteristics.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  characterID: number;
  characteristics:ICharacteristics[];
  constructor(private characterSheetService:CharacterSheetService, private characteristicsService:CharacteristicsService) { }

  ngOnInit(): void {
    this.characterSheetService.getCharacterID().subscribe((id) => {this.characterID = id});
    this.characteristicsService.getCharacteristicsByCharacterID(this.characterID).subscribe((characteristics) => {this.characteristics = characteristics});
  }

}
