import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPsychologyEffect } from 'src/app/interfaces/IPsychologyEffect';

@Injectable({
  providedIn: 'root'
})
export class PsychologyEffectService {

  private apiUrl:string = 'https://localhost:7049/api/PsychologyEffects'

  constructor(private http:HttpClient) { }


  getPsychologyEffects(): Observable<IPsychologyEffect[]> {
    return this.http.get<IPsychologyEffect[]>(this.apiUrl)
  }

  getPsychologyEffectsByCharacterID(characterID:number): Observable<IPsychologyEffect[]> {
    const url = this.apiUrl + '/?CharacterID=' + characterID;

    return this.http.get<IPsychologyEffect[]>(url)
  }

  getPsychologyEffect(psychologyEffectID:number): Observable<IPsychologyEffect> {
    const url = this.apiUrl + '/' + psychologyEffectID;

    return this.http.get<IPsychologyEffect>(url);
  }

  getPsychologyEffectsByCharacterId(characterID:number): Observable<IPsychologyEffect[]> {
    const url = this.apiUrl + '?characterID=' + characterID;

    return this.http.get<IPsychologyEffect[]>(url);
  }

  addPsychologyEffect(psychologyEffect:IPsychologyEffect): Observable<IPsychologyEffect> {
    return this.http.post<IPsychologyEffect>(this.apiUrl, psychologyEffect);
  }

  deletePsychologyEffect(psychologyEffect:IPsychologyEffect): Observable<IPsychologyEffect> {
    const url = this.apiUrl + '/' + psychologyEffect.psychologyEffectID;

    return this.http.delete<IPsychologyEffect>(url);
  }

  editPsychologyEffect(psychologyEffect:IPsychologyEffect): Observable<IPsychologyEffect> {
    const url = this.apiUrl + '/' + psychologyEffect.psychologyEffectID

    return this.http.put<IPsychologyEffect>(url, psychologyEffect);
  }
}
