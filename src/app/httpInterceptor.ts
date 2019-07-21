import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    if(request.url === 'https://openweathermap.org/data/2.5/weather?q=Tel%20Aviv,IL&appid=b6907d289e10d714a6e88b30761fae22')
    { 
      request = request.clone({
        withCredentials: false,
      });
    }else { 
      request = request.clone({
        withCredentials: true,
      });
    }
    return next.handle(request);
  }

}