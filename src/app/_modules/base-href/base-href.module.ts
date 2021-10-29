import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class BaseHrefModule {
  public api: string = "https://scrawlless.by/";
  public socketbase: string = "https://scrawlless.by/";
  //public api: string = "http://localhost:8080/";
  //public socketbase: string = "http://localhost:8080/";
}
