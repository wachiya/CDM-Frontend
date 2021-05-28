import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

//services help us fetch or save data directly without involving the components
export class ReportsService {
  //url = 'http://localhost:3000/api/v1';
  url ='https://cdm-backend-rbtq6vf7t-wachiya.vercel.app/api/v1';
  reports: any;

  constructor(private http: HttpClient) { 

  }

  // tap into the server endpoints to allow data persistance between frontend and backend
  getMonthlyReport(): Observable <{[data: string] : any[]}> { 
    const url = `${this.url}/reports/monthly`;
    return this.http.get<any[]>(url)
      .pipe(
        tap(reports => console.log(`fetched reports`, reports)),
        catchError(this.handleError<any>(`getMonthlyReport`))
      );
 }

 //create a error handler
 public handleError<T>(operation = 'operation', result?: T) { 
  return (error: any): Observable<T> => {
    console.log(`${operation} failed: ${error.message}`);
    return of(result as T);
  };
 }

}


