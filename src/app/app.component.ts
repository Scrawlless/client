import { Component } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

import { DataService } from "./_services/data/data.service";

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    public appData: DataService,
    private mediaMatcher: MediaMatcher
  ) {
    this.mobileQuery = this.mediaMatcher.matchMedia('(max-width: 640px)');

    this._mobileQueryListener = () => {
      this.appData.updateMobile(this.mobileQuery.matches);
    };

    if (this.mobileQuery.addEventListener) {
      this.mobileQuery.addEventListener("change", this._mobileQueryListener);
    } else {
      this.mobileQuery.addListener(this._mobileQueryListener);
    }
    
    this.appData.updateMobile(this.mobileQuery.matches);
  }

  public _mobileQueryListener = () => { };
  mobileQuery: MediaQueryList;

  title = 'Scrawlless';
}
