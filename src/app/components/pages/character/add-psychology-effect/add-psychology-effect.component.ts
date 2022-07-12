import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IPsychologyEffect } from 'src/app/interfaces/IPsychologyEffect';

@Component({
  selector: 'app-add-psychology-effect',
  templateUrl: './add-psychology-effect.component.html',
  styleUrls: ['./add-psychology-effect.component.css']
})
export class AddPsychologyEffectComponent implements OnInit {

  @Output() onAddPsychologyEffect:EventEmitter<IPsychologyEffect> = new EventEmitter();
  constructor() { }

  name: string;
  characterID: number = 13;
  ngOnInit(): void {
  }

  onSubmit():void {
    
    if(!this.name){
      alert('Please add a task');
      return;
    }

    const newPsychologyEffect:IPsychologyEffect = {
      psychologyEffectID: 0,
      characterID: this.characterID,
      name: this.name,
    }

    this.onAddPsychologyEffect.emit(newPsychologyEffect);
    this.name='';
  }
}
