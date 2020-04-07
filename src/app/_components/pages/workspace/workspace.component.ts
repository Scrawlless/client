import { Component, OnInit } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';

import { ApiService } from '../../../_services/api/api.service';
import { DataService } from "../../../_services/data/data.service";

@Component({
  selector: 'workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {

  constructor(
    private api: ApiService,
    private appData: DataService,
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
    this.data_subscription = this.appData.title.subscribe((message) => {
      this.title = message;
    });

    /*this.api.test("Index").subscribe(
      (result: any) => {
        this.openSnackBar(result.message, "Nice 👌");
        this.loading = false;
      },
      (err) => {
        this.openSnackBar(err.error.message, "Not Good 👎");
        this.loading = false;
      }
    );*/
  }

  ngOnDestroy(): void {
    this.data_subscription.unsubscribe();
  }

}
