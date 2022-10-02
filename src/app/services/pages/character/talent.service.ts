import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITalent } from 'src/app/interfaces/ITalent';

@Injectable({
  providedIn: 'root'
})
export class TalentService {

  private apiUrl:string = 'https://localhost:7049/api/Talents'

  constructor(private http:HttpClient) { }


  getTalents(): Observable<ITalent[]> {
    return this.http.get<ITalent[]>(this.apiUrl)
  }

  getTalent(talentID:number): Observable<ITalent> {
    const url = this.apiUrl + '/' + talentID;

    return this.http.get<ITalent>(url);
  }

  getTalentsByCharacterId(characterID:number): Observable<ITalent[]> {
    const url = this.apiUrl + '?characterID=' + characterID;

    return this.http.get<ITalent[]>(url);
  }

  addTalent(talent:ITalent): Observable<ITalent> {
    return this.http.post<ITalent>(this.apiUrl, talent);
  }

  deleteTalent(talent:ITalent): Observable<ITalent> {
    const url = this.apiUrl + '/' + talent.talentID;

    return this.http.delete<ITalent>(url);
  }

  editTalent(talent:ITalent): Observable<ITalent> {
    const url = this.apiUrl + '/' + talent.talentID

    return this.http.put<ITalent>(url, talent);
  }
}
