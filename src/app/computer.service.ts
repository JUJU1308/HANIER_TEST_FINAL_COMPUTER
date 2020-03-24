import { Injectable } from '@angular/core';
import { Computer } from './models/computer';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import {catchError, retry} from 'rxjs/internal/operators';


@Injectable({
  providedIn: 'root'
})
export class ComputerService {
  computers :  Computer[];
  apiURL = 'http://localhost:3000/computer';
  httpOptions = {headers: new HttpHeaders(
  {'Content-Type': 'application/json'})
   };

  constructor(private httpClient: HttpClient) {
    this.computers = [];
   }

   getComputer(): Observable<Computer[]> {
    return this.httpClient.get<Computer[]>(this.apiURL) 
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  getComputerById(id: number): Observable<Computer> {
    return this.httpClient.get<Computer>(this.apiURL + '/' + id).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  addComputer(computer: Computer): Observable<Computer> {
    return this.httpClient.post<Computer>(this.apiURL ,computer, this.httpOptions).pipe(
      catchError(this.handleError) 
      ); 
    } 
  removeComputer(computer: Computer): Observable<Computer> {
      return this.httpClient.delete<Computer>(this.apiURL + '/' + computer.id, this.httpOptions);
    }

    updateComputer(computerToUpdate: Computer): Observable<Computer> {
      return this.httpClient.put<Computer>(this.apiURL + '/' + computerToUpdate.id, computerToUpdate);
    }
  
handleError(error) 
{ let errorMessage = '';     
if ( error.error instanceof ErrorEvent ) { 
    errorMessage = error.error.message; 
    } else { 
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;     
    }    
    window.alert(errorMessage);     
    return throwError(errorMessage); } 
}
