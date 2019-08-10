import { Component, OnInit, ViewChild } from "@angular/core";
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { company } from 'src/app/Interfaces/Icompany';
import { UpdateCompanyService } from './updateCompant.service';
import { CompanyComponent } from '../../company/company.component';
import { Router } from '@angular/router';

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

    constructor(private srvUpdateCompany: UpdateCompanyService,private _router: Router) {} 

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
                this.loading = false;
                this._router.navigate(["./companyList"]);
            },
            (err:any) => {
                this.response = null;
                alert(err);
                this.loading = false;
                this._router.navigate(["./updateCompany"]);
            }
        ); 
    } 
        ngDestroy(){ 
            this.obsSubscription.unsubscribe;
        } 

    } 

    