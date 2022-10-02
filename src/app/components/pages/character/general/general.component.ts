import { Component, Input, OnInit } from '@angular/core';
import { ICharacter } from 'src/app/interfaces/ICharacter';
import { CharacterService } from 'src/app/services/pages/character/character.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})

export class GeneralComponent implements OnInit {
  @Input() characterID:number;
  character: ICharacter = {
    characterID: 0,
    name: '',
    race: '',
    class: '',
    profession:'',
    professionLevel:'',
    professionPath: '',
    status: '',
    age: 0,
    corruptionPoints: 0,
    sinPoints: 0};
  
  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {this.characterService.getCharacter(this.characterID).subscribe((character) => this.character = character)}
  
  editCharacter():void {
    this.characterService.editCharacter(this.character).subscribe();
  }
}
