import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { FrontPageComponent } from './front-page/front-page.component';
import { FrontPage2Component } from './front-page2/front-page2.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    FrontPage2Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

