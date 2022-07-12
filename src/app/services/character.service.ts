import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { ICharacter } from '../interfaces/ICharacter';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private apiUrl:string = 'https://localhost:7049/api/Characters'

  constructor(private http:HttpClient) { }


  getCharacters(): Observable<ICharacter[]> {
    return this.http.get<ICharacter[]>(this.apiUrl)
  }

  getCharacter(characterID:number): Observable<ICharacter> {
    const url = this.apiUrl + '/' + characterID;

    return this.http.get<ICharacter>(url);
  }

  addCharacter(character:ICharacter): Observable<ICharacter> {
    return this.http.post<ICharacter>(this.apiUrl, character);
  }

  deleteCharacter(character:ICharacter): Observable<ICharacter> {
    const url = this.apiUrl + '/' + character.characterID;

    return this.http.delete<ICharacter>(url);
  }

  editCharacter(character:ICharacter): Observable<ICharacter> {
    const url = this.apiUrl + '/' + character.characterID

    return this.http.put<ICharacter>(url, character);
  }
}
