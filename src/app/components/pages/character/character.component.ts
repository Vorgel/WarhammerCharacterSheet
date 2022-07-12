import { Component, OnInit } from '@angular/core';
import { ICharacter } from 'src/app/interfaces/ICharacter';
import { CharacterService } from 'src/app/services/character.service';
import { AppearanceService } from 'src/app/services/appearance.service';
import { PsychologyEffectService } from 'src/app/services/psychology-effect.service';
import { IPsychologyEffect } from 'src/app/interfaces/IPsychologyEffect';
import { DestinyService } from 'src/app/services/destiny.service';
import { HeroStatsService } from 'src/app/services/hero-stats.service';
import { ExperienceService } from 'src/app/services/experience.service';
import { SpeedService } from 'src/app/services/speed.service';
import { VitalityService } from 'src/app/services/vitality.service';
import { TalentService } from 'src/app/services/talent.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  constructor(private characterService: CharacterService, 
              private appearanceService: AppearanceService,
              private psychologyEffectService:PsychologyEffectService,
              private destinyService: DestinyService,
              private heroStatsService: HeroStatsService,
              private experienceService: ExperienceService,
              private speedService: SpeedService,
              private vitalityService: VitalityService) { }

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
    sinPoints: 0,
    appearance: {
      appearanceID:0,
      characterID: 0,
      height:0,
      hairDescription:"",
      eyesDescription:"",
      bodyDescription:"",
      distinguishingFeatures:"",
    },
    experience: {
      experienceID:0,
      characterID:0,
      available:0,
      spent:0,
    },
    speed: {
      speedID:0,
      characterID:0,
      speedPoints:0,
      walkPoints:0,
      runPoints:0,
    },
    talents: [],
    vitality: {
      vitalityID:0,
      characterID:0,
      healthPoints:0,
      maxHealthPoints:0,
    },
    armor: [],
    destiny: {
      destinyID:0,
      characterID:0,
      destinyPoints:0,
      luckPoints:0,
    },
    heroStats: {
      heroStatsID:0,
      characterID:0,
      heroPoints:0,
      determinationPoints:0,
      motivation:"",
    },
    psychologyEffects: [],
  };

  characterID: number = 13;

  ngOnInit(): void {
    this.characterService.getCharacter(this.characterID).subscribe((character) => this.character = character);
  }

  editCharacter():void {
    this.characterService.editCharacter(this.character).subscribe();
  }

  addPsychologyEffect(psychologyEffect:IPsychologyEffect):void {
    this.psychologyEffectService.addPsychologyEffect(psychologyEffect).subscribe((psychologyEffect) => this.character.psychologyEffects?.push(psychologyEffect));
  }

  deletePsychologyEffect(psychologyEffect:IPsychologyEffect):void {
    this.psychologyEffectService.deletePsychologyEffect(psychologyEffect)
      .subscribe(() => this.character.psychologyEffects = this.character.psychologyEffects?.filter(p => p.psychologyEffectID !== psychologyEffect.psychologyEffectID));
  }

  editPsychologyEffect(psychologyEffect:IPsychologyEffect):void {
    this.psychologyEffectService.editPsychologyEffect(psychologyEffect).subscribe();
  }

  editAppearance():void {
    if (this.character.appearance?.appearanceID === 0) {
      this.appearanceService.addAppearance(this.character.appearance).subscribe();
    }

    this.appearanceService.editAppearance(this.character.appearance!).subscribe();
  }

  editDestiny():void {
    if (this.character.destiny?.destinyID === 0) {
      this.destinyService.addDestiny(this.character.destiny).subscribe();
    }

    this.destinyService.editDestiny(this.character.destiny!).subscribe();
  }

  editExperience():void {
    if (this.character.experience?.experienceID === 0) {
      this.experienceService.addExperiences(this.character.experience).subscribe();
    }

    this.experienceService.editExperiences(this.character.experience!).subscribe();
  }

  editSpeed():void {
    if (this.character.speed?.speedID === 0) {
      this.speedService.addSpeed(this.character.speed).subscribe();
    }

    this.speedService.editSpeed(this.character.speed!).subscribe();
  }

  editVitality():void {
    if (this.character.vitality?.vitalityID === 0) {
      this.vitalityService.addVitality(this.character.vitality).subscribe();
    }

    this.vitalityService.editVitality(this.character.vitality!).subscribe();
  }

  editHeroStats():void {
    if (this.character.heroStats?.heroStatsID === 0) {
      this.heroStatsService.addHeroStats(this.character.heroStats).subscribe();
    }

    this.heroStatsService.editHeroStats(this.character.heroStats!).subscribe();
  }
}
