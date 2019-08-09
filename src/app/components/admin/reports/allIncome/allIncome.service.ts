
import { Injectable } from "@angular/core";
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import{Observable, throwError} from 'rxjs'
import{catchError, map} from 'rxjs/operators'
import { income } from 'src/app/Interfaces/Income';

@Injectable()
export class AllIncomeService {
   

    private _allIncomeURL = 'http://localhost:8080/CouponProject/rest/admin/viewAllIncome'; 
    constructor(private http:HttpClient){
        
    }
    getallIncome():Observable<income[]> 
    { 
        return this.http.get<income[]>(this._allIncomeURL).pipe(
            catchError(
                (error:HttpErrorResponse)=>{
                    console.log(error)
                    return throwError("Error in the http getcompanyIncome")
                }
            )
        )
    }
}