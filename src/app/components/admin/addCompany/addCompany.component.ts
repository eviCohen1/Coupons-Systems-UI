import { Component, OnInit, ViewChild } from "@angular/core";
import { AddCompanyService } from './addCompany.service';
import { Subscription } from 'rxjs';
import { NgForm } from "@angular/forms";

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



    constructor (private srvAddCompany: AddCompanyService) { }
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
                alert(this.response); 
                this.loading = false;
            },
            (err:any) => {
                this.response = null;
                alert(err);
                this.loading = false;
            }
        ); 
        
                        
    }

    ngDestroy() { 
        this.obsSubscription.unsubscribe;
    } 
}