import { Component, OnInit } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';

import { ApiService } from '../../../_services/api/api.service';
import { AuthService } from '../../../_services/auth/auth.service';
import { DataService } from "../../../_services/data/data.service";
import { LanguageService } from '../../../_services/language/language.service';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(
    private api: ApiService,
    private auth: AuthService,
    private appData: DataService,
    private router: Router,
    private notification: MatSnackBar,
    public lang: LanguageService
  ) { }

  mode: string = "register";
  user: any;
  authError: string = "kek";
  loading: boolean = false;

  auth_form = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ])
  });

  ngOnInit(): void {
    this.switchMode("login");
  }

  openSnackBar(message: string, action: string = "Close") {
    this.notification.open(message, action, {
      duration: 2000
    });
  }

  switchMode(mode): void {
    this.mode = mode;

    switch (this.mode) {
      case "login": {
        this.auth_form.controls["name"].disable();
        break;
      }
      case "register": {
        this.auth_form.controls["name"].enable();
        break;
      }
      default: {
        break;
      }
    }
  }

  onSubmit(): void {
    if (this.auth_form.status != "INVALID") {
      this.loading = true;

      switch (this.mode) {
        case "login": {
          this.auth.login(this.auth_form.value).subscribe((result) => {
            this.logIn();
          }, (err) => {
            this.loading = false;
            this.openSnackBar(err.error.message);
          });
          break;
        }
        case "register": {
          this.auth.register(this.auth_form.value).subscribe((result) => {
            this.logIn();
          }, (err) => {
            this.loading = false;
            this.openSnackBar(err.error.message);
          });
          break;
        }
        default: {
          break;
        }
      }
    }
  }

  logIn(): void {
    this.auth.profile().subscribe(() => {
      this.loading = false;
      this.router.navigate(["/"]);
    }, (err) => {
      console.log(err);
      this.loading = false;
      this.auth.logout();
      this.openSnackBar(err.error.message);
    });
  }
}
