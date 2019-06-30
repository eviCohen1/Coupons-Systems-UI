import { Component, OnInit, ViewChild } from '@angular/core';
import { viewAttached } from '@angular/core/src/render3/instructions';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { JoinService } from 'src/app/join.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
title = "logIn"; 
@ViewChild('f') signupForm:NgForm; 

username = "evic"; 
password = "221284"; 
client = "Admin";

isCompanyLoggedIn:boolean ; 
isAdminLoggedIn:boolean ; 
isCustomerLoggedIn:boolean; 
isUserLoggedIn: boolean;
join  = []


  constructor(private _router:Router,private route:ActivatedRoute, private service :JoinService) { }

  ngOnInit() {

    this.isUserLoggedIn = false;
    this.isAdminLoggedIn = false;  
    this.isCompanyLoggedIn = false; 
    this.isCustomerLoggedIn = false; 

  }

  onSubmit()
  {
    // this.auth.logIn({this.signupForm.value}).subscribe(() => {
      
    // })
    console.log(this.signupForm);
    console.log(this.signupForm.value.username);
    console.log(this.signupForm.value.password); 
    console.log(this.signupForm.value.client); 


    switch(this.signupForm.value.client) { 
      case "Admin": { 
     
        if (this.signupForm.value.username == this.username && 
          this.signupForm.value.password == this.password ) { 
            this.isAdminLoggedIn = true; 
            this.isUserLoggedIn = true;
            this.join = [this.isUserLoggedIn,this.isAdminLoggedIn,this.isCompanyLoggedIn,this.isCustomerLoggedIn]; 
            this.service.subject.next(this.join);
            this._router.navigate(['./admin']);
      }
      else 
       { 
         alert ( "Admin - The password or user name not correct, please try again")
       }
         break; 
      } 
      case "Company": { 
        
        if (this.signupForm.value.username == this.username && 
          this.signupForm.value.password == this.password) { 
            this.isCompanyLoggedIn = true;
            this.isUserLoggedIn = true;
            this.join = [this.isUserLoggedIn,this.isAdminLoggedIn,this.isCompanyLoggedIn,this.isCustomerLoggedIn]; 
            this.service.subject.next(this.join);
            this._router.navigate(['./company']);
      }
      else 
       { 
         alert ( "Company - The password or user name not correct, please try again")
       }
         break; 
      } 

      case "Customer": {   
        if (this.signupForm.value.username == this.username && 
          this.signupForm.value.password == this.password ) { 
            this.isCustomerLoggedIn = true ; 
            this.isUserLoggedIn = true;
            this.join = [this.isUserLoggedIn,this.isAdminLoggedIn,this.isCompanyLoggedIn,this.isCustomerLoggedIn]; 
            this.service.subject.next(this.join);
            this._router.navigate(['./customer']);
      }
      else 
       { 
         alert ( "Customer - The password or user name not correct, please try again")
       }
         break; 
      }
      default:
      alert();

  }
  }
}