import { Component, OnInit } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';

import { ApiService } from '../../../_services/api/api.service';
import { DataService } from "../../../_services/data/data.service";

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(
    private api: ApiService,
    private appData: DataService,
    private notification: MatSnackBar
  ) { }

  loading: boolean = false;

  openSnackBar(message: string, action: string) {
    this.notification.open(message, action, {
      duration: 2000,
    });
  }

  ngOnInit(): void {
    /*this.api.test("Settings").subscribe(
      (result: any) => {
        this.openSnackBar(result.message, "Nice 👌");
        this.appData.changeTitle(result.message);
        this.loading = false;
      },
      (err) => {
        this.openSnackBar(err.error.message, "Not Good 👎");
        this.loading = false;
      }
    );*/
  }

}
