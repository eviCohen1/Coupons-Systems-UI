import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable, throwError } from 'rxjs';
import { HttpParams, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class AddCustomerService { 


    private _sessionId: string; 
    
    private _addCustURL = 'http://localhost:8080/CouponProject/rest/admin/createCustomer'; 
    

    constructor(private http:HttpClient, private cookieService: CookieService){
        this._sessionId = cookieService.get("sessionId");   
    }


    addCustomer(name,pass):Observable<any> 
    { 
        let headers = new Headers({
            'Content-Type': 'application/json'
          });

        let params = new HttpParams({
            fromObject: {
                name: name,
                pass: pass          
            }
          });

          return this.http.get<any>(this._addCustURL,{params}).pipe(  
            catchError(
                (error:HttpErrorResponse)=>{
                    console.log(error)
                    return throwError("Error to create customer " + name + " please try agian")
                }
            )
        )
    }
    
}