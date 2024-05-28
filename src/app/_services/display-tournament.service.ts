import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Tournament } from '../_models/tournament';
import { Schedule } from '../_models/schedule';

const baseUrl = `${environment.apiUrl}/tournaments`;

@Injectable({
  providedIn: 'root'
})
export class DisplayTournamentService {
  private baseUrl = `${environment.apiUrl}/tournaments`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Tournament[]> {
    return this.http.get<Tournament[]>(baseUrl);
  }

  getAllTournaments(): Observable<Tournament[]> {
    return this.http.get<Tournament[]>(`${this.baseUrl}`);
  }

  getScheduleByTournamentId(tournamentId: number): Observable<Schedule[]> {
    return this.http.get<Schedule[]>(`${this.baseUrl}/${tournamentId}/schedules`);
  }
}