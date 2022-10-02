import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISkill } from 'src/app/interfaces/ISkill';

@Injectable({
  providedIn: 'root'
})

export class SkillsService {
  private apiUrl:string = 'https://localhost:7049/api/Skills'

  constructor(private http:HttpClient) { }
  
  getSkillsByCharacterID(characterID:number): Observable<ISkill[]> {
    const url = this.apiUrl + '/?CharacterID=' + characterID;

    return this.http.get<ISkill[]>(url)
  }

  getSkill(skillID:number): Observable<ISkill> {
    const url = this.apiUrl + '/' + skillID;

    return this.http.get<ISkill>(url);
  }

  addSkill(skill:ISkill): Observable<ISkill> {
    return this.http.post<ISkill>(this.apiUrl, skill);
  }

  deleteSkill(skill:ISkill): Observable<ISkill> {
    const url = this.apiUrl + '/' + skill.skillID;

    return this.http.delete<ISkill>(url);
  }

  editSkill(skill:ISkill): Observable<ISkill> {
    const url = this.apiUrl + '/' + skill.skillID

    return this.http.put<ISkill>(url, skill);
  }
}

