import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { company } from 'src/app/Interfaces/Icompany';
import { catchError } from 'rxjs/operators';

@Injectable () 
export class UpdateCompanyService { 


     private _updateCompanyURL = 'http://localhost:8080/CouponProject/rest/admin/updateCompany';
    constructor(private http:HttpClient) {} 

    updateCompany(company):Observable<any> { 
     return this.http.post<any>(this._updateCompanyURL,{company}).pipe(  
          catchError(
              (error:HttpErrorResponse)=>{
                  console.log(error)
                  return throwError("Error to update company, please try agian")
              }
          )
      )
  }

 }

