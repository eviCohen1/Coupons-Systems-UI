import { Component, OnInit, Input } from '@angular/core';
import { JoinService } from 'src/app/join.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public isAdminLoggedIn:boolean  = false; 
  public isCustomerLoggedIn:boolean   = false; 
  public isCompanyLoggedIn:boolean  = false; 
  public isUserLoggedIn: boolean  = false; 

  constructor(private service : JoinService) { }

  ngOnInit() {
  
    this.service.subject.subscribe((join) => { 

      this.isUserLoggedIn = join[0] ; 
      this.isAdminLoggedIn = join[1] ; 
      this.isCompanyLoggedIn = join[2]; 
      this.isCustomerLoggedIn = join[3]; 

    })

  
    
  }

 
  logOut ()  { 
    this.service.subject.next([false,false,false,false]);
  }
 




}
