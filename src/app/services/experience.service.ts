import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IExperience } from '../interfaces/IExperience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private apiUrl:string = 'https://localhost:7049/api/Experiences'

  constructor(private http:HttpClient) { }


  getExperiences(): Observable<IExperience[]> {
    return this.http.get<IExperience[]>(this.apiUrl)
  }

  getExperience(experienceID:number): Observable<IExperience> {
    const url = this.apiUrl + '/' + experienceID;

    return this.http.get<IExperience>(url);
  }

  addExperiences(experience:IExperience): Observable<IExperience> {
    return this.http.post<IExperience>(this.apiUrl, experience);
  }

  deleteExperiences(experience:IExperience): Observable<IExperience> {
    const url = this.apiUrl + '/' + experience.experienceID;

    return this.http.delete<IExperience>(url);
  }

  editExperiences(experience:IExperience): Observable<IExperience> {
    const url = this.apiUrl + '/' + experience.experienceID

    return this.http.put<IExperience>(url, experience);
  }
}
