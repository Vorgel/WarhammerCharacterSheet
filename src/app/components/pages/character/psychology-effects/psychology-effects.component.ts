import { Component, Input, OnInit } from '@angular/core';
import { IPsychologyEffect } from 'src/app/interfaces/IPsychologyEffect';
import { PsychologyEffectService } from 'src/app/services/pages/character/psychology-effect.service';

@Component({
  selector: 'app-psychology-effects',
  templateUrl: './psychology-effects.component.html',
  styleUrls: ['./psychology-effects.component.scss']
})
export class PsychologyEffectsComponent implements OnInit {
  @Input() characterID:number;
  psychologyEffects:IPsychologyEffect[];

  constructor(private psychologyEffectService:PsychologyEffectService) { }

  ngOnInit(): void {this.psychologyEffectService.getPsychologyEffectsByCharacterId(this.characterID)
    .subscribe((psychologyEffects) => this.psychologyEffects = psychologyEffects)}

  addPsychologyEffect(psychologyEffect:IPsychologyEffect):void {
    this.psychologyEffectService.addPsychologyEffect(psychologyEffect).subscribe((psychologyEffect) => this.psychologyEffects?.push(psychologyEffect));
  }

  deletePsychologyEffect(psychologyEffect:IPsychologyEffect):void {
    this.psychologyEffectService.deletePsychologyEffect(psychologyEffect)
      .subscribe(() => this.psychologyEffects = this.psychologyEffects?.filter(p => p.psychologyEffectID !== psychologyEffect.psychologyEffectID));
  }

  editPsychologyEffect(psychologyEffect:IPsychologyEffect):void {
    this.psychologyEffectService.editPsychologyEffect(psychologyEffect).subscribe();
  }
}
