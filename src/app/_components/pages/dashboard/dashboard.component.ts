import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';

import { ApiService } from '../../../_services/api/api.service';
import { DataService } from "../../../_services/data/data.service";
import { LanguageService } from '../../../_services/language/language.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    public appData: DataService,
    private router: Router,
    private api: ApiService,
    public lang: LanguageService,
    private notification: MatSnackBar
  ) { }

  title_sub: any;
  mobile_sub: any;

  title: string;
  loading: boolean = false;
  opened: boolean = true;
  mobile: boolean;

  navigate(path: string): void {
    this.router.navigate([path]);
  }

  openSnackBar(message: string, action: string) {
    this.notification.open(message, action, {
      duration: 2000,
    });
  }

  ngOnInit(): void {
    this.title_sub = this.appData.title.subscribe((title) => {
      this.title = title;
    });

    this.mobile_sub = this.appData.mobile.subscribe((mobile) => {
      this.mobile = mobile;
    });

    this.api.test("Dashboard").subscribe((result: any) => {
      this.openSnackBar(result.message, "Nice 👌");
      this.loading = false;
    }, (err) => {
      this.openSnackBar(err.error.message, "Not Good 👎");
      this.loading = false;
    });
  }

  ngOnDestroy(): void {
    this.title_sub.unsubscribe();
    this.mobile_sub.unsubscribe();
  }

}
