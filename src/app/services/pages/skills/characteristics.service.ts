import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICharacteristics } from 'src/app/interfaces/ICharacteristic';

@Injectable({
  providedIn: 'root'
})

export class CharacteristicsService {
  private apiUrl:string = 'https://localhost:7049/api/Characteristics'

  constructor(private http:HttpClient) { }
  
  getCharacteristicsByCharacterID(characterID:number): Observable<ICharacteristics[]> {
    const url = this.apiUrl + '/?CharacterID=' + characterID;

    return this.http.get<ICharacteristics[]>(url)
  }

  getCharacteristic(characteristicsID:number): Observable<ICharacteristics> {
    const url = this.apiUrl + '/' + characteristicsID;

    return this.http.get<ICharacteristics>(url);
  }

  addCharacteristics(characteristics:ICharacteristics): Observable<ICharacteristics> {
    return this.http.post<ICharacteristics>(this.apiUrl, characteristics);
  }

  deleteCharacteristics(characteristics:ICharacteristics): Observable<ICharacteristics> {
    const url = this.apiUrl + '/' + characteristics.characteristicsID;

    return this.http.delete<ICharacteristics>(url);
  }

  editCharacteristics(characteristics:ICharacteristics): Observable<ICharacteristics> {
    const url = this.apiUrl + '/' + characteristics.characteristicsID

    return this.http.put<ICharacteristics>(url, characteristics);
  }
}
