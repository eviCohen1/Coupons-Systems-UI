import { Component, OnInit, Input } from '@angular/core';
import { JoinService } from 'src/app/join.service';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

isUserLoggedIn:boolean ; 
isAdminLoggedIn:boolean ; 
isCompanyLoggedIn:boolean ; 
isCustomerLoggedIn:boolean;  

  constructor(private service : JoinService) { }

  ngOnInit() {

    this.isUserLoggedIn = false; 

    this.service.subject.subscribe((join) => { 
      console.log('LayoutComponent', join);
      this.isUserLoggedIn = join[0] ; 
      this.isAdminLoggedIn = join[1] ; 
      this.isCompanyLoggedIn = join[2]; 
      this.isCustomerLoggedIn = join[3]; 
     } );
  }


}
