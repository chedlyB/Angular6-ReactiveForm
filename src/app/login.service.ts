import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable , of } from 'rxjs';
import {catchError,map,tap} from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})


export class LoginService {

   
  url = "https://localhost:4859" ; 
     _value : any ; 

  constructor(private http: HttpClient) { }


  login (): Observable<any> {
    this._value = 'aza' ; 
      console.log(this.v ) ; 

     return this.http.post<any>(this.url, this.v , httpOptions ).pipe(
      tap((a: any) => this.log(`added person`)),
      catchError(this.handleError<any>('addperson'))
    );
  }

 set v (newcontent: any){
   this._value = newcontent ; 
   
     
 }

 get v ():any {
   return(this._value);
   console.log(this._value) ; 
 }






  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }



    /** Log a HeroService message with the MessageService */
    private log(message: string) {
      
    }
 
   


    
  }
        
        
  

