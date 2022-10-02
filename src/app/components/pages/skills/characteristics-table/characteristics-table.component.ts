import { Component, Input, OnInit } from '@angular/core';
import { CharacteristicsType } from 'src/app/enums/CharacteristicsType';
import { ICharacteristics } from 'src/app/interfaces/ICharacteristic';

@Component({
  selector: 'app-characteristics-table',
  templateUrl: './characteristics-table.component.html',
  styleUrls: ['./characteristics-table.component.scss']
})

export class CharacteristicsTableComponent implements OnInit {
  @Input() characterID:number;
  @Input() characteristics:ICharacteristics[];

  columndefs : any[] = ['type','baseValue', 'experienceDevelopedValue', 'talentsDevelopedValue', 'sum'];
  constructor() { }

  ngOnInit(): void {}

  getCharacteristic(characateristicType: CharacteristicsType)
  {
    return this.characteristics.find(x => x.type === characateristicType);
  }

  getCharacteristicsName(typeNumber: number )
  {
    return CharacteristicsType[typeNumber];
  }
}
