
import { Injectable } from "@angular/core";
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import{Observable, throwError} from 'rxjs'
import{catchError, map} from 'rxjs/operators'
import { CookieService } from 'ngx-cookie-service';
import { company } from 'src/app/Interfaces/Icompany';

@Injectable()
export class CompaniesService {
   
    private _sessionId: string; 
    // private _companyURL = './assets/api/companies.json'; //json
    private _companyURL = 'http://localhost:8080/CouponProject/rest/admin/getAllCompanies'; 
    constructor(private http:HttpClient, private cookieService: CookieService){
        this._sessionId = cookieService.get("sessionId");
        
    }

    public set sessionId(value: string) {
        this._sessionId = value;
        console.log(this._sessionId); 
        this.cookieService.set("sessionId", value);
      }
    
    getCompanies():Observable<company[]> 
    { 
        let myHeader = new Headers();
        myHeader.append('SET-COOKIE', 'JSESSIONID=<_sessionId>');
        return this.http.get<company[]>(this._companyURL).pipe(
            catchError(
                (error:HttpErrorResponse)=>{
                    console.log(error)
                    return throwError("Error in the http get company List")
                }
            
            )
        )
    }
 
   
    }


