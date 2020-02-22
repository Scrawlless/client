import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { BaseHrefModule } from './_modules/base-href/base-href.module';
import { DataService } from "./_services/data/data.service";
import { ApiService } from './_services/api/api.service';
import { CanvasService } from './_services/canvas/canvas.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BaseHrefModule
  ],
  providers: [
    ApiService,
    DataService,
    CanvasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
