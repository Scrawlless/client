import { Component, OnInit } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';

import { LanguageService } from '../../../_services/language/language.service';
import { ApiService } from '../../../_services/api/api.service';
import { DataService } from "../../../_services/data/data.service";
import { Router } from '@angular/router';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(
    private api: ApiService,
    private appData: DataService,
    private notification: MatSnackBar,
    private router: Router,
    public lang: LanguageService
  ) { }

  loading: boolean = false;

  openSnackBar(message: string, action: string) {
    this.notification.open(message, action, {
      duration: 2000,
    });
  }

  navigate(path: string): void {
    this.router.navigate([path]);
  }

  ngOnInit(): void {
    /*this.api.test("Tasks").subscribe(
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
