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
    private _urlLogin = "http://localhost:8080/CouponProject/login";

    constructor ( private http: HttpClient) { }

    login ( name,pass,type)  { 
        return this.http.post<any>( this._urlLogin, {name,pass,type}).pipe(
            catchError(
            (error:HttpErrorResponse)=>{
                console.log(error)
                return throwError("Error in the http getProducts")
            }
        )
    )
    }




  }