import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';

import { ApiService } from '../../../_services/api/api.service';
import { DataService } from "../../../_services/data/data.service";

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private router: Router,
    private api: ApiService,
    private data: DataService,
    private notification: MatSnackBar
  ) { }

  data_subscription: any;

  loading: boolean = false;
  title: string = "Initial title";

  navigate(path: string): void {
    this.router.navigate([path]);
  }

  openSnackBar(message: string, action: string) {
    this.notification.open(message, action, {
      duration: 2000,
    });
  }

  ngOnInit(): void {
    this.api.test("Dashboard").subscribe((result: any) => {
      this.openSnackBar(result.message, "Nice 👌");
    }, (err) => {
      this.loading = false;
      this.openSnackBar(err.error.message, "Not Good 👎");
    });

    this.data.currentMessage.subscribe((message) => {
      console.log(message);
      this.title = message;
    });
  }

  ngOnDestroy(): void {
    //this.data_subscription.unsubscribe();
  }

}
