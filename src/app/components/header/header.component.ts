import { Component, OnInit, Input } from '@angular/core';
import { timeInterval } from 'rxjs/operators';
import { Time } from '@angular/common';
import { WeatherService } from './weather.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public currentDate: Date;
  public temp : number; 
  public windSpeed : number;
  public currentTime: Date;
  obsSubscription:Subscription;
  constructor(private srvWeather:WeatherService) { };
  @Input() public isUserLoggedIn: boolean 

  ngOnInit() {

    this.currentDate =new Date(); 
    this.currentTime = new Date(); 
    this.isUserLoggedIn = true; 

    this.obsSubscription = this.srvWeather.getWeather().subscribe(
      (data) => {
        console.log(data)
        this.temp=data.main.temp; 
        this.windSpeed = data.wind.speed; 
      });
      (err:any) => {
        console.log(err)
      }
    


  }

}
