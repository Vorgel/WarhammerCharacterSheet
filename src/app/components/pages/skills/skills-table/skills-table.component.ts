import { Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { SkillsService } from 'src/app/services/pages/skills/skills.service';
import { ISkill } from 'src/app/interfaces/ISkill';
import { CharacteristicsType } from 'src/app/enums/CharacteristicsType';
import { ICharacteristics } from 'src/app/interfaces/ICharacteristic';


@Component({
  selector: 'app-skills-table',
  templateUrl: './skills-table.component.html',
  styleUrls: ['./skills-table.component.scss']
})

export class SkillsTableComponent implements OnInit {
  @Input() characterID:number;
  @Input() characteristics:ICharacteristics[]
  
  columndefs : any[] = ['name','type', 'typeValue', 'experienceDevelopedValue', 'talentsDevelopedValue', 'sum'];
  skills:ISkill[];

  constructor(private skillsService:SkillsService) {}

  ngOnInit(): void {this.skillsService.getSkillsByCharacterID(this.characterID).subscribe((skills) => {this.skills = skills})}

  getCharacteristicsTypeName(typeNumber:number) { return CharacteristicsType[typeNumber] }

  getCharacteristicsValue(typeNumber:number) { 
    const characteristics = this.characteristics?.find(c => c.type === typeNumber);
    const currentValue = characteristics!.baseValue + characteristics!.experienceDevelopedValue + characteristics!.talentsDevelopedValue;
    
    return currentValue 

  }
}