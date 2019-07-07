import { Component, OnInit, ViewChild } from "@angular/core";
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { company } from 'src/app/Interfaces/Icompany';
import { UpdateCompanyService } from './updateCompant.service';
import { CompanyComponent } from '../../company/company.component';

@Component( { 
    selector:"app-updateCompany", 
    templateUrl: './updateCompany.component.html',
    styleUrls: ['./updateCompany.component.css'],
})

export class UpdateCompanyComponent implements OnInit { 

    obsSubscription:Subscription;
    public response:String;
    @ViewChild('f') Form:NgForm; 
    company: company; 
    loading:boolean; 

    constructor(private srvUpdateCompany: UpdateCompanyService) {} 

    ngOnInit () : void { 
        
    }

    onSubmit() { 
        
        this.company = <company>{}; 
        this.company.compName = this.Form.value.name;
        this.company.password = this.Form.value.password; 
        this.company.email = this.Form.value.email; 
        this.loading = true; 
       
        this.obsSubscription = this.srvUpdateCompany.updateCompany(this.company)
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
        ngDestroy(){ 
            this.obsSubscription.unsubscribe;
        } 

    } 

    