import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { weatherData } from 'src/app/Interfaces/WeatherData';

@Injectable()
export class WeatherService {
   
    private _weatherURL = 'https://openweathermap.org/data/2.5/weather?q=Tel%20Aviv,IL&appid=b6907d289e10d714a6e88b30761fae22'; 
    constructor(private http:HttpClient){

    }
    
    getWeather():Observable<weatherData> 
    { 
        return this.http.get<weatherData>(this._weatherURL).pipe(
            catchError(
                (error:HttpErrorResponse)=>{
                    console.log(error)
                    return throwError("Error in the http get weather data")
                }
            )
        )
    }
    
    }


