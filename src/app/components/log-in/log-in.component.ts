import { Component, OnInit, ViewChild } from '@angular/core';
import { viewAttached } from '@angular/core/src/render3/instructions';
import { NgForm, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { JoinService } from 'src/app/join.service';
import { AuthenticationService } from './AuthenticationService.service';
import { Subscription } from 'rxjs';

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

public name :String; 
public pass : String; 
public type : String;  

isCompanyLoggedIn:boolean ; 
isAdminLoggedIn:boolean ; 
isCustomerLoggedIn:boolean; 
isUserLoggedIn: boolean;
join  = []
obsSubscription:Subscription;
returnUrl: string;
  error: any;
  loading: boolean;


  constructor(
              private _router:Router,
              private route:ActivatedRoute, 
              private service :JoinService,
              private authService : AuthenticationService              ) { }

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

    this.name = this.signupForm.value.username;
    this.pass = this.signupForm.value.password; 
    this.type = this.signupForm.value.client; 
    
    // this.obsSubscription = this.authService.login(this.name,this.pass,this.type).subscribe( 

    //   (data) => {
    //             this._router.navigate([this.returnUrl]);
    //           },
    //           error => {
    //             this.error = error;
    //             this.loading = false;
    //         });

    switch(this.type) { 
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