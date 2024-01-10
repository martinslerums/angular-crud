import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Team } from './team';
import { MessageService } from './message.service';
import { Router } from '@angular/router';


@Injectable({providedIn: 'root'})

export class TeamService {
  
  private teamsURL: string = 'http://localhost:3000/teams';
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  
  constructor( 
    private http: HttpClient,
    private router: Router
    ) {}

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.teamsURL)
      .pipe(
        catchError(this.handleError<Team[]>('getTeams', []))
      );
  }

  getTeam(id: number): Observable<Team> {
    const url = `${this.teamsURL}/${id}`;
    return this.http.get<Team>(url).pipe(
      catchError(this.handleError<Team>(`getTeam id=${id}`))
    );
  }

  putTeam(team: Team): Observable<any> {
    const url = `${this.teamsURL}/${team.id}`;
    return this.http.put(url, team, this.httpOptions).pipe(
      tap(() => alert(`Team with ID: ${team.id} edited!`)),
      catchError(this.handleError<Team>('updatedTeam'))
    )
  }

  postTeam(team: Team): Observable<Team> {
    return this.http.post<Team>(this.teamsURL, team, this.httpOptions).pipe(
      tap(() => alert('New team added!')),
      catchError(this.handleError<Team>('postTeam'))
    )
  }

  deleteTeam(id: number): Observable<Team> {
    const url = `${this.teamsURL}/${id}`;
    return this.http.delete<Team>(url, this.httpOptions).pipe(
      tap(() => alert(`Team with ID: ${id} deleted!`)),
      catchError(this.handleError<Team>('deleteTeam'))
    );
  }
  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      alert(`${operation} failed: ${error.message}`);
      this.router.navigate(['/404'], {skipLocationChange: true})
      return of(result as T)
    }
  }
  
}
