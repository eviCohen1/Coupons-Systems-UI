import { Component, OnInit, ViewChild } from "@angular/core";
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AddCustomerService } from './addCustomer.service';

@Component( { 
    selector:"app-addCustomer", 
    templateUrl: './addCustomer.component.html',
    styleUrls: ['./addCustomer.component.css'],
})

export class AddCustomerComponent implements OnInit { 

    obsSubscription:Subscription;
    public response:String;
    @ViewChild('f') addCompanyForm:NgForm; 
    public name :String; 
    public pass : String;   
    loading: boolean

 

    constructor(private srvAddCustomer:AddCustomerService,private _router:Router){}
   
    ngOnInit () : void { 
        
    }

    onSubmit() { 
        this.name = this.addCompanyForm.value.name;
        this.pass = this.addCompanyForm.value.pass; 
        

        this.loading = true;
        
        this.obsSubscription = this.srvAddCustomer.addCustomer(this.name,this.pass)
        .subscribe( 
            (data) => { 
                this.response = data;
                this.loading = false;
                this._router.navigate(["./customerList"]);
                
            },
            (err:any) => {
                this.response = null;
                alert(err);
                this.loading = false;
                this._router.navigate(["./addCustomer"]);
            }
        ); 
        
                        
    }

    ngDestroy() { 
        this.obsSubscription.unsubscribe;
    } 
}