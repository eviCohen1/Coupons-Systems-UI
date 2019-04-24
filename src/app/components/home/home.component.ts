import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public title: string;
  public currentDate: Date;
 
  constructor() { }

  ngOnInit() {

    this.title = "Coupons system "; //Detail from the server 
    this.currentDate = new Date() 
  }

}
