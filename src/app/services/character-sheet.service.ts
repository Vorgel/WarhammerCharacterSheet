import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterSheetService {
  private characterID = new BehaviorSubject<number>(18);

  constructor() { }

  getCharacterID():Observable<number> {
    return this.characterID;
  }

}
