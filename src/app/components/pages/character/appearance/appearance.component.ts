import { Component, Input, OnInit } from '@angular/core';
import { IAppearance } from 'src/app/interfaces/IAppearance';
import { AppearanceService } from 'src/app/services/pages/character/appearance.service';

@Component({
  selector: 'app-appearance',
  templateUrl: './appearance.component.html',
  styleUrls: ['./appearance.component.scss']
})

export class AppearanceComponent implements OnInit {
  @Input() characterID:number;

  appearance:IAppearance = {
    characterID: 0,
    height:0,
    hairDescription:"",
    eyesDescription:"",
    bodyDescription:"",
    distinguishingFeatures:"",
  };

  constructor(private appearanceService: AppearanceService) { }

  ngOnInit(): void {
    this.appearanceService.getAppearance(this.characterID).subscribe((appearance) => {
      this.appearance = appearance;
    });
  }

  editAppearance():void {
    if (this.appearance?.characterID === 0) {
      this.appearanceService.addAppearance(this.appearance).subscribe();
    }

    this.appearanceService.editAppearance(this.appearance!).subscribe();
  }
}
