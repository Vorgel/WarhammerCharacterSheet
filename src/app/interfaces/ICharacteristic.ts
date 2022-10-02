import { CharacteristicsType } from "../enums/CharacteristicsType";

export interface ICharacteristics {
    characteristicsID:number;
    characterID:number;
    type:CharacteristicsType;
    baseValue:number;
    experienceDevelopedValue:number;
    talentsDevelopedValue:number;
    currentValue:number;
}