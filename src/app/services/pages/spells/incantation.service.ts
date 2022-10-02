import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IIncantation } from 'src/app/interfaces/IIncantation';

@Injectable({
  providedIn: 'root'
})

export class IncantationService {

  private apiUrl:string = 'https://localhost:7049/api/Incantations'

  constructor(private http:HttpClient) { }
  
  getIncantationsByCharacterID(characterID:number): Observable<IIncantation[]> {
    const url = this.apiUrl + '/?CharacterID=' + characterID;

    return this.http.get<IIncantation[]>(url)
  }

  getIncantations(incantationID:number): Observable<IIncantation> {
    const url = this.apiUrl + '/' + incantationID;

    return this.http.get<IIncantation>(url);
  }

  addIncantation(incantation:IIncantation): Observable<IIncantation> {
    return this.http.post<IIncantation>(this.apiUrl, incantation);
  }

  deleteIncantation(incantation:IIncantation): Observable<IIncantation> {
    const url = this.apiUrl + '/' + incantation.incantationID;

    return this.http.delete<IIncantation>(url);
  }

  editIncantation(incantation:IIncantation): Observable<IIncantation> {
    const url = this.apiUrl + '/' + incantation.incantationID

    return this.http.put<IIncantation>(url, incantation);
  }
}
