import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable () 
export class UpdateCustomerService { 


     private _updateCustmerURL = 'http://localhost:8080/CouponProject/rest/admin/updateCustomer';
    constructor(private http:HttpClient) {} 

    updateCustomer(customer):Observable<any> { 
     return this.http.post<any>(this._updateCustmerURL,customer).pipe(  
          catchError(
              (error:HttpErrorResponse)=>{
                  console.log(error)
                  return throwError("Error to update company, please try agian")
              }
          )
      )
  }

 }