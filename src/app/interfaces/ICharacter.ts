import { IAppearance } from "./IAppearance";
import { IArmor } from "./IArmor";
import { IDestiny } from "./IDestiny";
import { IExperience } from "./IExperience";
import { IHeroStats } from "./IHeroStats";
import { ISpeed } from "./ISpeed";
import { ITalent } from "./ITalent";
import { IVitality } from "./IVitality";
import { IPsychologyEffect } from "./IPsychologyEffect";

export interface ICharacter {
    characterID:number;
    name:string;
    race:string;
    class:string;
    profession?:string;
    professionLevel?:string;
    professionPath?:string;
    status?:string;
    age?:number;
    corruptionPoints?:number;
    sinPoints?:number;
    appearance?: IAppearance;
    experience?: IExperience;
    speed?: ISpeed;
    talents?: ITalent[];
    vitality?: IVitality;
    armor?: IArmor[];
    heroStats?: IHeroStats;
    destiny?:IDestiny;
    psychologyEffects?:IPsychologyEffect[];
}

