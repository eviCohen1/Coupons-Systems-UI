import { Component, OnInit } from '@angular/core';
import { JoinService } from 'src/app/join.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {


public isUserLoggedIn:boolean ; 
public isAdminLoggedIn:boolean ; 
public isCompanyLoggedIn:boolean ; 
public isCustomerLoggedIn:boolean;  

  constructor(private service : JoinService) { }

  ngOnInit() {

    this.service.subject.subscribe((join) => { 
      console.log (join)
      this.isUserLoggedIn = join[0] ; 
      this.isAdminLoggedIn = join[1] ; 
      this.isCompanyLoggedIn = join[2]; 
      this.isCustomerLoggedIn = join[3]; 
     } );
  }

}
