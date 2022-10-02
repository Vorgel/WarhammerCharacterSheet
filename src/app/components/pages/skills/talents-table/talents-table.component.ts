import { Component, Input, OnInit } from '@angular/core';
import { ITalent } from 'src/app/interfaces/ITalent';
import { TalentService } from 'src/app/services/pages/character/talent.service';

@Component({
  selector: 'app-talents-table',
  templateUrl: './talents-table.component.html',
  styleUrls: ['./talents-table.component.scss']
})
export class TalentsTableComponent implements OnInit {
  @Input() characterID:number;
  talents:ITalent[];
  columndefs : any[] = ['name','level', 'description'];
  constructor(private talentService:TalentService) { }

  ngOnInit(): void {this.talentService.getTalentsByCharacterId(this.characterID).subscribe((talents) => this.talents = talents)}

  addTalent(talent: ITalent) {
    this.talentService.addTalent(talent).subscribe((talent) => this.talents.push(talent));
  }

  deleteTalent(talent: ITalent) {
    this.talentService.deleteTalent(talent)
      .subscribe((talent) => this.talents = this.talents.filter(x => x.talentID !== talent.talentID));
  }
}
