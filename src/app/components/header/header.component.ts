import { Component, OnInit } from '@angular/core';
import { timeInterval } from 'rxjs/operators';
import { Time } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public currentDate: Date;
  public temp; 
  public currentTime: Date;
  constructor() { }

  ngOnInit() {

    this.currentDate =new Date(); 
    this.currentTime = new Date(); 
    this.temp = 25.5;
  }

}
