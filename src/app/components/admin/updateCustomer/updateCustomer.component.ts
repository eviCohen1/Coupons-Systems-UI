import { Component, OnInit, ViewChild } from "@angular/core";
import { customer } from 'src/app/Interfaces/Icustomer';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UpdateCustomerService } from './updateCustomer.service';

@Component( { 
    selector:"app-updateCustomer", 
    templateUrl: './updateCustomer.component.html',
    styleUrls: ['./updateCustomer.component.css'],
})

export class UpdateCustomerComponent implements OnInit { 

    obsSubscription:Subscription;
    public response:String;
    @ViewChild('f') Form:NgForm; 
    customer : customer;  
    loading:boolean; 

    constructor(private srvUpdateCustomer: UpdateCustomerService,private _router: Router) {}
    ngOnInit () : void { }

    onSubmit() { 

        this.customer = <customer>{}; 
        this.customer.CustomerName = this.Form.value.name; 
        this.customer.password = this.Form.value.password; 
        this.loading = true; 
        console.log(this.customer);


        this.obsSubscription = this.srvUpdateCustomer.updateCustomer(this.customer).subscribe(
            (data) => { 
                this.response = data;
                this.loading = false;
                this._router.navigate(["./customerList"]);
            },
            (err:any) => {
                this.response = null;
                alert(err);
                this.loading = false;
                this._router.navigate(["./updateCustomer"]);
            }
        ); 
    } 

        ngDestroy(){ 
            this.obsSubscription.unsubscribe;
        } 

}