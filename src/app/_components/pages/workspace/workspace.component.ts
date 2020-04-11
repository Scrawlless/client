import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

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
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener("match", this._mobileQueryListener);
    this.data_subscription.unsubscribe();
  }

}
