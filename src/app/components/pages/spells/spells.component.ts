import { Component, Input, OnInit } from '@angular/core';
import { CharacterSheetService } from 'src/app/services/character-sheet.service';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.scss']
})
export class SpellsComponent implements OnInit {
  @Input() characterID:number;

  constructor(private characterSheetService:CharacterSheetService) { }

  ngOnInit(): void {this.characterSheetService.getCharacterID().subscribe((id) => {this.characterID = id})}

}
