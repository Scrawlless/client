import { Component, OnInit } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';

import { ApiService } from '../../../_services/api/api.service';
import { DataService } from "../../../_services/data/data.service";

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(
    private api: ApiService,
    private data: DataService,
    private notification: MatSnackBar
  ) { }

  data_subscription: any;

  loading: boolean = false;
  title: string = "Initial Title";

  openSnackBar(message: string, action: string) {
    this.notification.open(message, action, {
      duration: 2000,
    });
  }

  ngOnInit(): void {
    this.api.test("Index").subscribe((result: any) => {
      this.openSnackBar(result.message, "Nice 👌");
      this.title = result.message;
    }, (err) => {
      this.loading = false;
      this.openSnackBar(err.error.message, "Not Good 👎");
    });

    this.data_subscription = this.data.currentMessage.subscribe(message => this.title = message);
  }

  ngOnDestroy(): void {
    this.data_subscription.unsubscribe();
  }

}
