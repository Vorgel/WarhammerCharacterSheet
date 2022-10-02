import { IncantationType } from "../enums/IncantationType";

export interface IIncantation {
    incantationID: number;
    characterID: number;
    incantationType: IncantationType;
    name: string;
    spellLevel:	string;
    rangeInMeters: number;
    targetsAmount: number
    duration: number
    effect: string;
}
