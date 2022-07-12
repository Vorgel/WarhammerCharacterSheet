import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IHeroStats } from '../interfaces/IHeroStats';

@Injectable({
  providedIn: 'root'
})
export class HeroStatsService {
  
  private apiUrl:string = 'https://localhost:7049/api/HeroStats'

  constructor(private http:HttpClient) { }


  getHeroStatss(): Observable<IHeroStats[]> {
    return this.http.get<IHeroStats[]>(this.apiUrl)
  }

  getHeroStats(HeroStatsID:number): Observable<IHeroStats> {
    const url = this.apiUrl + '/' + HeroStatsID;

    return this.http.get<IHeroStats>(url);
  }

  addHeroStats(heroStats:IHeroStats): Observable<IHeroStats> {
    return this.http.post<IHeroStats>(this.apiUrl, heroStats);
  }

  deleteHeroStats(heroStats:IHeroStats): Observable<IHeroStats> {
    const url = this.apiUrl + '/' + heroStats.heroStatsID;

    return this.http.delete<IHeroStats>(url);
  }

  editHeroStats(heroStats:IHeroStats): Observable<IHeroStats> {
    const url = this.apiUrl + '/' + heroStats.heroStatsID

    return this.http.put<IHeroStats>(url, heroStats);
  }
}
