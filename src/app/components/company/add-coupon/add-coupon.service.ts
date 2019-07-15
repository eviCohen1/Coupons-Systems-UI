import { Injectable } from '@angular/core'
import { CookieService } from 'ngx-cookie-service';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';


@Injectable()
export class AddCouponService {
   
    private _sessionId: string; 
    private _baseURL = 'http://localhost:8080/CouponProject/rest/company/createCoupon'; 
    

    constructor(private http:HttpClient, private cookieService: CookieService){
        this._sessionId = cookieService.get("sessionId");   
    }
   
    addCoupon(coupon):Observable<any> 
    {

        return this.http.post<any>(this._baseURL,coupon).pipe(  
            catchError(
                (error:HttpErrorResponse)=>{
                    console.log(error)
                    return throwError("Error to create coupon, please try agian")
                }
            )
        )
    }
 
   
    }