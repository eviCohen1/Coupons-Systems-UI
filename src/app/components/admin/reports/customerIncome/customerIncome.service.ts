
import { Injectable } from "@angular/core";
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import{Observable, throwError} from 'rxjs'
import{catchError, map} from 'rxjs/operators'
import { income } from 'src/app/Interfaces/Income';

@Injectable()
export class CustomersIncomeService {
   

    private _customersIncomeURL = 'http://localhost:8080/CouponProject/rest/admin/viewIncomeByCustomer'; 
    constructor(private http:HttpClient){
        
    }
    getCustomersIncome():Observable<income[]> 
    { 
        return this.http.get<income[]>(this._customersIncomeURL).pipe(
            catchError(
                (error:HttpErrorResponse)=>{
                    console.log(error)
                    return throwError("Error in the http getCustomerIncome")
                }
            )
        )
    }
}