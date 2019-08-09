
import { Injectable } from "@angular/core";
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import{Observable, throwError} from 'rxjs'
import{catchError, map} from 'rxjs/operators'
import { income } from 'src/app/Interfaces/Income';

@Injectable()
export class CompanyFinanceService {
   

    private _companysIncomeURL = 'http://localhost:8080/CouponProject/rest/company/viewIncomeByCompeny'; 
    constructor(private http:HttpClient){
        
    }
    getcompanysIncome():Observable<income[]> 
    { 
        return this.http.get<income[]>(this._companysIncomeURL).pipe(
            catchError(
                (error:HttpErrorResponse)=>{
                    console.log(error)
                    return throwError("Error in the http getcompanyIncome")
                }
            )
        )
    }
}