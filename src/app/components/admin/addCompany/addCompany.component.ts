import { Component, OnInit, ViewChild } from "@angular/core";
import { AddCompanyService } from './addCompany.service';
import { Subscription } from 'rxjs';
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';

@Component( { 
    selector:"app-addCompany", 
    templateUrl: './addCompany.component.html',
    styleUrls: ['./addCompany.component.css'],
})

export class AddCompanyComponent implements OnInit { 

    obsSubscription:Subscription;
    public response:String;
    @ViewChild('f') addCompanyForm:NgForm; 
    public name :String; 
    public pass : String; 
    public email : String;  
    loading: boolean;



    constructor (private srvAddCompany: AddCompanyService, private _router: Router) { }
    ngOnInit () : void { 
    
    }

    onSubmit() { 

        
        this.name = this.addCompanyForm.value.name;
        this.pass = this.addCompanyForm.value.pass; 
        this.email = this.addCompanyForm.value.email; 

        this.loading = true;
        
        this.obsSubscription = this.srvAddCompany.addCompany(this.name,this.pass,this.email)
        .subscribe( 
            (data) => { 
                this.response = data; 
                this.loading = false;
                this._router.navigate(["./companyList"]);
            },
            (err:any) => {
                this.response = null;
                alert(err);
                this.loading = false;
                this._router.navigate(["./addCompany"]);
            }
        ); 
        
                        
    }

    ngDestroy() { 
        this.obsSubscription.unsubscribe;
    } 
}