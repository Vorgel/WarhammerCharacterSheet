import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPsychologyEffect } from 'src/app/interfaces/IPsychologyEffect';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-psychology-effect',
  templateUrl: './psychology-effect.component.html',
  styleUrls: ['./psychology-effect.component.css']
})
export class PsychologyEffectComponent implements OnInit {

  @Input() psychologyEffect:IPsychologyEffect;
  @Output() onDeletePsychologyEffect:EventEmitter<IPsychologyEffect> = new EventEmitter();
  faTimes = faTimes;
  
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(){
    this.onDeletePsychologyEffect.emit(this.psychologyEffect);
  }  
}
