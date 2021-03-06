import { Component, OnInit, Input } from '@angular/core';
import { JoinService } from 'src/app/join.service';
import { Router } from '@angular/router';


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
  public title:String; 

  constructor(private service : JoinService,private router: Router) { }

  ngOnInit() {
  
    this.service.subject.subscribe((join) => { 

      this.isUserLoggedIn = join[0] ; 
      this.isAdminLoggedIn = join[1] ; 
      this.isCompanyLoggedIn = join[2]; 
      this.isCustomerLoggedIn = join[3]; 

    })

    this.title = sessionStorage.getItem("userName"); 
    
  }

  logOut ()  { 
    this.service.subject.next([false,false,false,false])
    this.router.navigate(['LogIn']);
  }
 




}
