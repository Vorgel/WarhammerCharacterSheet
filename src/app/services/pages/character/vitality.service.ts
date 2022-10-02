import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IVitality } from 'src/app/interfaces/IVitality'; 

@Injectable({
  providedIn: 'root'
})
export class VitalityService {

  private apiUrl:string = 'https://localhost:7049/api/Vitalities'

  constructor(private http:HttpClient) { }


  getVitalities(): Observable<IVitality[]> {
    return this.http.get<IVitality[]>(this.apiUrl)
  }

  getVitality(vitalityID:number): Observable<IVitality> {
    const url = this.apiUrl + '/' + vitalityID;

    return this.http.get<IVitality>(url);
  }

  addVitality(vitality:IVitality): Observable<IVitality> {
    return this.http.post<IVitality>(this.apiUrl, vitality);
  }

  deleteVitality(vitality:IVitality): Observable<IVitality> {
    const url = this.apiUrl + '/' + vitality.characterID;

    return this.http.delete<IVitality>(url);
  }

  editVitality(vitality:IVitality): Observable<IVitality> {
    const url = this.apiUrl + '/' + vitality.characterID

    return this.http.put<IVitality>(url, vitality);
  }
}
