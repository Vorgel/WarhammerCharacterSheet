import { CharacteristicsType } from "../enums/CharacteristicsType";

export interface ISkill {
    skillID?:number;
    characterID:number;
    name:string;
    type:CharacteristicsType;
    baseValue:number;
    experienceDevelopedValue:number;
    talentsDevelopedValue:number;
    currentValue:number;
}