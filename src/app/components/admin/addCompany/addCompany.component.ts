import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { AddCompanyService } from './addCompany.service';
import { company } from 'src/app/Interfaces/Icompany';
import { Subscription } from 'rxjs';

@Component( { 
    selector:"app-addCompany", 
    templateUrl: './addCompany.component.html',
    styleUrls: ['./addCompany.component.css'],
})

export class AddCompanyComponent implements OnInit { 

    obsSubscription:Subscription;
    company:company; 

    constructor (private srvAddCompany: AddCompanyService) { }
    ngOnInit () : void { 
        this.obsSubscription = this.srvAddCompany.addCompany(this.company).subscribe( 
            (data) => { this.company=data}); 
            (err:any) => console.log(err)
        
        
    }

    ngDestroy() { 
        this.obsSubscription.unsubscribe;
    } 
}