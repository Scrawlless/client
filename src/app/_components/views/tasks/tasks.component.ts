import { Component, OnInit } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';

import { ApiService } from '../../../_services/api/api.service';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(
    private api: ApiService,
    private notification: MatSnackBar
  ) { }

  loading: boolean = false;

  openSnackBar(message: string, action: string) {
    this.notification.open(message, action, {
      duration: 2000,
    });
  }

  ngOnInit(): void {
    this.api.test("Tasks").subscribe((result: any) => {
      this.openSnackBar(result.message, "Nice 👌");
    }, (err) => {
      this.loading = false;
      this.openSnackBar(err.error.message, "Not Good 👎");
    });
  }

}
