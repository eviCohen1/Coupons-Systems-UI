
import { Injectable } from "@angular/core";
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import{Observable, throwError} from 'rxjs'
import{catchError, map} from 'rxjs/operators'
import { Icoupons } from 'src/app/Interfaces/Icoupons';

@Injectable()
export class CouponService {
    
    private _couponsURL = 'https://coupons-b1a31.firebaseio.com/.json';
    constructor(private http:HttpClient){}
    
    getCoupons():Observable<Icoupons[]> 
    { 
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


