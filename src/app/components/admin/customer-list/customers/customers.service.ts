
import { Injectable } from "@angular/core";
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import{Observable, throwError} from 'rxjs'
import{catchError, map} from 'rxjs/operators'
import { customer } from 'src/app/Interfaces/Icustomer';

@Injectable()
export class CustomersService {
   
    // private _customersURL = './assets/api/customers.json'; //json
    private _customersURL = 'http://localhost:8080/CouponProject/rest/admin/getAllCustomers'; 
    constructor(private http:HttpClient){
        
    }
    getCustomers():Observable<customer[]> 
    { 
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


