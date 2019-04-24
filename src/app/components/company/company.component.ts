import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  public companyTitle : string; 

  constructor() { }

  ngOnInit() {

    this.companyTitle = "mPrest"; 
  }

}
