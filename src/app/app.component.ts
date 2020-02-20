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

    this.mobileQueryListener = () => {
      this.appData.updateMobile(this.mobileQuery.matches);
    };
    
    this.mobileQuery.addEventListener("change", this.mobileQueryListener);
    this.appData.updateMobile(this.mobileQuery.matches);
  }

  public mobileQueryListener = () => { };
  mobileQuery: MediaQueryList;

  title = 'Scrawlless';
}
