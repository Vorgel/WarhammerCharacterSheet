import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISpeed } from 'src/app/interfaces/ISpeed';

@Injectable({
  providedIn: 'root'
})
export class SpeedService {

  private apiUrl:string = 'https://localhost:7049/api/Speeds'

  constructor(private http:HttpClient) { }


  getSpeeds(): Observable<ISpeed[]> {
    return this.http.get<ISpeed[]>(this.apiUrl)
  }

  getSpeed(speedID:number): Observable<ISpeed> {
    const url = this.apiUrl + '/' + speedID;

    return this.http.get<ISpeed>(url);
  }

  addSpeed(speed:ISpeed): Observable<ISpeed> {
    return this.http.post<ISpeed>(this.apiUrl, speed);
  }

  deleteSpeed(speed:ISpeed): Observable<ISpeed> {
    const url = this.apiUrl + '/' + speed.characterID;

    return this.http.delete<ISpeed>(url);
  }

  editSpeed(speed:ISpeed): Observable<ISpeed> {
    const url = this.apiUrl + '/' + speed.characterID

    return this.http.put<ISpeed>(url, speed);
  }
}
