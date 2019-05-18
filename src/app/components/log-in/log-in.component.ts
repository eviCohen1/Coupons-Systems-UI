import { Component, OnInit, ViewChild } from '@angular/core';
import { viewAttached } from '@angular/core/src/render3/instructions';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

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


  constructor(private _router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
  }

  onSubmit()
  {
    
    console.log(this.signupForm);
    console.log(this.signupForm.value.username);
    console.log(this.signupForm.value.password); 
    console.log(this.signupForm.value.client); 

    if (this.signupForm.value.username == this.username && 
        this.signupForm.value.password == this.password &&  
        this.signupForm.value.client == this.client ) { 

          this._router.navigate(['/home']);
        
        

    }

  }
}



