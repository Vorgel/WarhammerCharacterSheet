import { Component, Input, OnInit } from '@angular/core';
import { IDestiny } from 'src/app/interfaces/IDestiny';
import { IHeroStats } from 'src/app/interfaces/IHeroStats';
import { DestinyService } from 'src/app/services/pages/character/destiny.service';
import { HeroStatsService } from 'src/app/services/pages/character/hero-stats.service';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.scss']
})

export class PointsComponent implements OnInit {
  @Input() characterID:number;
  destiny:IDestiny = {
    characterID:0,
    destinyPoints:0,
    luckPoints:0
  };

  heroStats:IHeroStats = {
    characterID:0,
    heroPoints:0,
    determinationPoints:0,
    motivation:""
  };

  constructor(private heroStatsService:HeroStatsService, private destinyService:DestinyService) { }

  ngOnInit(): void {
    this.heroStatsService.getHeroStats(this.characterID).subscribe((heroStats) => this.heroStats = heroStats);
    this.destinyService.getDestiny(this.characterID).subscribe((destiny) => this.destiny = destiny);
  }

  editHeroStats():void {
    if (this.heroStats?.characterID === 0) {
      this.heroStatsService.addHeroStats(this.heroStats).subscribe();
    }

    this.heroStatsService.editHeroStats(this.heroStats!).subscribe();
  }

  editDestiny():void {
    if (this.destiny?.characterID === 0) {
      this.destinyService.addDestiny(this.destiny).subscribe();
    }

    this.destinyService.editDestiny(this.destiny!).subscribe();
  }
}
