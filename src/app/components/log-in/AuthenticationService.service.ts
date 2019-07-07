import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
  export class AuthenticationService { 

    private currentUserSubject : BehaviorSubject<any>; 
    public currentUser : Observable<any>; 
    private _urlLogin = "http://localhost:8080/CouponProject/rest/LoginService/login ";

    constructor ( private http: HttpClient) { }

    login (user)  { 
        return this.http.post<any>( this._urlLogin, user).pipe(
            catchError(
            (error:HttpErrorResponse)=>{
                console.log(error)
                return throwError("Error to log in ")
            }
        )
    )
    }

  }