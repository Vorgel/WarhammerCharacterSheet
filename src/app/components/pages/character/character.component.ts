import { Component, Input, OnInit } from '@angular/core';
import { CharacterSheetService } from 'src/app/services/character-sheet.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  characterID: number;
  
  constructor(private characterSheetService:CharacterSheetService) { }

  ngOnInit(): void {this.characterSheetService.getCharacterID().subscribe((id) => {this.characterID = id})}

}
