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
    }

    this._resizeListener = () => {
      this.appData.updateResize({ width: window.innerWidth, height: window.innerHeight });
    }

    if (this.mobileQuery.addEventListener) {
      this.mobileQuery.addEventListener("change", this._mobileQueryListener);
    } else {
      this.mobileQuery.addListener(this._mobileQueryListener);
    }

    window.addEventListener("resize", this._resizeListener);

    this.appData.updateMobile(this.mobileQuery.matches);
    this.appData.updateResize({ width: window.innerWidth, height: window.innerHeight });
  }

  private _mobileQueryListener = () => { };
  private _resizeListener = () => { };

  mobileQuery: MediaQueryList;

  title = 'Scrawlless';
}
