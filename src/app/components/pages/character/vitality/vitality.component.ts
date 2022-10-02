import { Component, Input, OnInit } from '@angular/core';
import { IVitality } from 'src/app/interfaces/IVitality';
import { VitalityService } from 'src/app/services/pages/character/vitality.service';

@Component({
  selector: 'app-vitality',
  templateUrl: './vitality.component.html',
  styleUrls: ['./vitality.component.scss']
})

export class VitalityComponent implements OnInit {
  @Input() characterID:number;
  vitality: IVitality = {
    characterID:0,
    healthPoints:0,
    maxHealthPoints:0,
  };

  constructor(private vitalityService: VitalityService) { }

  ngOnInit(): void {this.vitalityService.getVitality(this.characterID).subscribe((vitality) => this.vitality = vitality)
  }

  editVitality():void {
    if (this.vitality?.characterID === 0) {
      this.vitalityService.addVitality(this.vitality).subscribe();
    }

    this.vitalityService.editVitality(this.vitality!).subscribe();
  }
}
