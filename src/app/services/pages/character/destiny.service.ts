import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDestiny } from 'src/app/interfaces/IDestiny';

@Injectable({
  providedIn: 'root'
})
export class DestinyService {

  private apiUrl:string = 'https://localhost:7049/api/Destinies'

  constructor(private http:HttpClient) { }


  getDestinies(): Observable<IDestiny[]> {
    return this.http.get<IDestiny[]>(this.apiUrl)
  }

  getDestiny(destinyID:number): Observable<IDestiny> {
    const url = this.apiUrl + '/' + destinyID;

    return this.http.get<IDestiny>(url);
  }

  addDestiny(destiny:IDestiny): Observable<IDestiny> {
    return this.http.post<IDestiny>(this.apiUrl, destiny);
  }

  deleteDestiny(destiny:IDestiny): Observable<IDestiny> {
    const url = this.apiUrl + '/' + destiny.characterID;

    return this.http.delete<IDestiny>(url);
  }

  editDestiny(destiny:IDestiny): Observable<IDestiny> {
    const url = this.apiUrl + '/' + destiny.characterID

    return this.http.put<IDestiny>(url, destiny);
  }
}
