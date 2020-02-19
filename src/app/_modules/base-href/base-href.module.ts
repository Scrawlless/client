import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class BaseHrefModule {
  public api: string = "https://scrawlless.com/";
  public socketbase: string = "https://scrawlless.com/";
  //public api: string = "http://localhost:8080/";
  //public socketbase: string = "http://localhost:8080/";
}
