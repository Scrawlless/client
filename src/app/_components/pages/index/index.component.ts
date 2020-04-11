import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

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
    private appData: DataService,
    private mediaMatcher: MediaMatcher,
    private changeDetectorRef: ChangeDetectorRef,
    private notification: MatSnackBar
  ) {
    this.mobileQuery = this.mediaMatcher.matchMedia('(max-width: 640px)');
    this._mobileQueryListener = () => { this.changeDetectorRef.detectChanges() };
    this.mobileQuery.addEventListener("match", this._mobileQueryListener);
  }

  private mobileQuery: MediaQueryList;
  private _mobileQueryListener = () => { };

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
        console.log(result);
        this.openSnackBar(result.message, "Nice 👌");
        this.loading = false;
      },
      (err) => {
        console.log(err);
        this.openSnackBar(err.error.message, "Not Good 👎");
        this.loading = false;
      }
    );*/
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener("match", this._mobileQueryListener);
    this.data_subscription.unsubscribe();
  }

}
