import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm, FormBuilder } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthenticationService } from "./AuthenticationService.service";
import { Subscription } from "rxjs";
import { JoinService } from "../../join.service";
import { user } from "src/app/Interfaces/Iuser";
import { setCookie } from "src/app/Interfaces/ISetCookie";

@Component({
  selector: "app-log-in",
  templateUrl: "./log-in.component.html",
  styleUrls: ["./log-in.component.css"]
})
export class LogInComponent implements OnInit {
  title = "logIn";
  @ViewChild("f") signupForm: NgForm;

  username = "evic";
  password = "221284";
  client = "Admin";

  public result: setCookie;

  isCompanyLoggedIn: boolean;
  isAdminLoggedIn: boolean;
  isCustomerLoggedIn: boolean;
  isUserLoggedIn: boolean;
  join = [];
  obsSubscription: Subscription;
  error: any;
  loading: boolean;
  user: user;

  constructor(
    private _router: Router,
    private route: ActivatedRoute,
    private service: JoinService,
    private authService: AuthenticationService
  ) {}

  ngOnInit() {
    this.isUserLoggedIn = false;
    this.isAdminLoggedIn = false;
    this.isCompanyLoggedIn = false;
    this.isCustomerLoggedIn = false;
  }

  onSubmit() {
    // this.auth.logIn({this.signupForm.value}).subscribe(() => {

    // })

    this.user = <user>{};

    this.user.userName = this.signupForm.value.username;
    this.user.password = this.signupForm.value.password;
    this.user.clientType = this.signupForm.value.client;

    this.obsSubscription = this.authService.login(this.user).subscribe(
      data => {
        this.result = <setCookie>{};
        this.result = data;
        this.loading = false;
        sessionStorage.setItem('Cookie',this.result.value as string);
        
        switch (this.result.comment) {
          case "Admin": {
            this.isAdminLoggedIn = true;
            this.isUserLoggedIn = true;
            this.join = [
              this.isUserLoggedIn,
              this.isAdminLoggedIn,
              this.isCompanyLoggedIn,
              this.isCustomerLoggedIn
            ];
            this.service.subject.next(this.join);
            this._router.navigate(["./admin"]);

            break;
          }
          case "Company": {
            this.isCompanyLoggedIn = true;
            this.isUserLoggedIn = true;
            this.join = [
              this.isUserLoggedIn,
              this.isAdminLoggedIn,
              this.isCompanyLoggedIn,
              this.isCustomerLoggedIn
            ];
            this.service.subject.next(this.join);
            this._router.navigate(["./company"]);

            break;
          }

          case "Customer": {
            this.isCustomerLoggedIn = true;
            this.isUserLoggedIn = true;
            this.join = [
              this.isUserLoggedIn,
              this.isAdminLoggedIn,
              this.isCompanyLoggedIn,
              this.isCustomerLoggedIn
            ];
            this.service.subject.next(this.join);
            this._router.navigate(["./customer"]);

            break;
          }
          default:
            alert();
        }
      },
      error => {
        this.error = error;
        this.loading = false;
        alert("The password or user name not correct, please try again");
      }
    );
  }
}
