
import { Injectable } from "@angular/core";
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import{Observable, throwError} from 'rxjs'
import{catchError, map} from 'rxjs/operators'
import { Icoupons } from 'src/app/Interfaces/Icoupons';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class CouponService {
   
    private _sessionId: string; 
    // private _couponsURL = 'https://coupons-b1a31.firebaseio.com/.json'; //FireBase 
    private _couponsURL = 'http://localhost:8080/CouponProject/rest/company/getAllCompanyCoupons'; 
    constructor(private http:HttpClient, private cookieService: CookieService){
        this._sessionId = cookieService.get("sessionId");
        
    }

    public set sessionId(value: string) {
        this._sessionId = value;
        console.log(this._sessionId); 
        this.cookieService.set("sessionId", value);
      }
    
    getCoupons():Observable<Icoupons[]> 
    { 
        let myHeader = new Headers();
        myHeader.append('SET-COOKIE', 'JSESSIONID=<_sessionId>');
        return this.http.get<Icoupons[]>(this._couponsURL).pipe(
            catchError(
                (error:HttpErrorResponse)=>{
                    console.log(error)
                    return throwError("Error in the http getProducts")
                }
            )
        )
    }
    getCouponById(id: number): Observable<Icoupons> {
        return this.getCoupons().pipe(
            map((data) => data.find(p => p.id == id))
        )
       }
 
   
    }


