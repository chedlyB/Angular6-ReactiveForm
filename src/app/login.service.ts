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

   
  url = "https://localhossqddsqqdqst:4859" ; 
     _value : any ; 

  constructor(private http: HttpClient) { }


@Injectable()


    login() {
      
        return this.http.post<any>(this.url+'/users', this.v )
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            }));
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
        
        
  

