
import { Injectable } from "@angular/core";
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import{Observable, throwError} from 'rxjs'
import{catchError, map} from 'rxjs/operators'
import { Icoupons } from 'src/app/Interfaces/Icoupons';
import { CookieService } from 'ngx-cookie-service';
import { customer } from 'src/app/Interfaces/Icustomer';

@Injectable()
export class CustomersService {
   
    private _sessionId: string; 
    private _customersURL = './assets/api/customers.json'; //json
    // private _customersURL = 'http://localhost:8080/CouponProject/rest/admin/getAllCustomers'; 
    constructor(private http:HttpClient, private cookieService: CookieService){
        this._sessionId = cookieService.get("sessionId");
        
    }

    public set sessionId(value: string) {
        this._sessionId = value;
        console.log(this._sessionId); 
        this.cookieService.set("sessionId", value);
      }
    
    getCustomers():Observable<customer[]> 
    { 
        let myHeader = new Headers();
        myHeader.append('SET-COOKIE', 'JSESSIONID=<_sessionId>');
        return this.http.get<customer[]>(this._customersURL).pipe(
            catchError(
                (error:HttpErrorResponse)=>{
                    console.log(error)
                    return throwError("Error in the http getProducts")
                }
            )
        )
    }
 
   
    }


