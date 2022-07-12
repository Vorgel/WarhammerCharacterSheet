import { BodyPart } from "../enums/BodyPart";

export interface IArmor {
    armorID?:number;
    characterID:number;
    name:string;
    bodyPart:BodyPart;
    weight?:number;
    armorPoints:number;
}

