import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  //url = 'http://localhost:3000/api/v1';
  url ='https://cdm-backend-wachiya.vercel.app/api/v1/';
  patients: any;
  name: any;

  constructor(private http: HttpClient) { 

  }
  
  getAllPatients(): Observable <{[data: string] : any[]}> { 
    const url = `${this.url}/patients`;
    return this.http.get<any[]>(url)
      .pipe(
        tap(patients => console.log(`fetched patients`, patients)),
        catchError(this.handleError<any>(`getAllPatients`))
      );
 }

 searchPatients(name: string): Observable <{[data: string] : any[]}> { 
  const url = `${this.url}/search?name=` + name;
  return this.http.get<any[]>(url)
    .pipe(
      tap(patients => console.log(`patient result`, patients)),
      catchError(this.handleError<any>(`searchPatients`))
    );
}

 public handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.log(`${operation} failed: ${error.message}`);
    return of(result as T);
  };
}
}

