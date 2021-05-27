import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  url = 'http://localhost:3000/api/v1';
  reports: any;

  constructor(private http: HttpClient) { 

  }
  getMonthlyReport(): Observable <{[data: string] : any[]}> { 
    const url = `${this.url}/reports/monthly`;
    return this.http.get<any[]>(url)
      .pipe(
        tap(reports => console.log(`fetched reports`, reports)),
        catchError(this.handleError<any>(`getMonthlyReport`))
      );
 }
 public handleError<T>(operation = 'operation', result?: T) { 
  return (error: any): Observable<T> => {
    console.log(`${operation} failed: ${error.message}`);
    return of(result as T);
  };
 }

}

