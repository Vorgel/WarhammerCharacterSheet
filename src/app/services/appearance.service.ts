import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAppearance } from '../interfaces/IAppearance';

@Injectable({
  providedIn: 'root'
})
export class AppearanceService {

  private apiUrl:string = 'https://localhost:7049/api/Appearances'

  constructor(private http:HttpClient) { }


  getAppearances(): Observable<IAppearance[]> {
    return this.http.get<IAppearance[]>(this.apiUrl)
  }

  getAppearance(appearanceID:number): Observable<IAppearance> {
    const url = this.apiUrl + '/' + appearanceID;

    return this.http.get<IAppearance>(url);
  }

  addAppearance(appearance:IAppearance): Observable<IAppearance> {
    return this.http.post<IAppearance>(this.apiUrl, appearance);
  }

  deleteAppearance(appearance:IAppearance): Observable<IAppearance> {
    const url = this.apiUrl + '/' + appearance.appearanceID;

    return this.http.delete<IAppearance>(url);
  }

  editAppearance(appearance:IAppearance): Observable<IAppearance> {
    const url = this.apiUrl + '/' + appearance.appearanceID

    return this.http.put<IAppearance>(url, appearance);
  }
}
