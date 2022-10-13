import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FrontPageComponent } from './front-page/front-page.component';
import { FormsModule } from "@angular/forms";
import { Demo13NgswitchComponent } from './demo13-ngswitch/demo13-ngswitch.component';
import { CardGridComponent } from "./card-grid/card-grid.component";
import { FooterComponent} from "./footer/footer.component";

import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';

import { MatSliderModule } from "@angular/material/slider";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { RouterModule } from "@angular/router";
import { MatCarouselModule } from "ng-mat-carousel";
import { MatCardModule } from "@angular/material/card";
import { ShopByColorComponent } from './shop-by-color/shop-by-color.component';
import { MatTabsModule } from "@angular/material/tabs";
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    Demo13NgswitchComponent,
    CardGridComponent,
    FooterComponent,
    ShopByColorComponent,
    ContactUsComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        MatSliderModule,
        MatSidenavModule,
        MatCheckboxModule,
        MatButtonModule,
        MatListModule,
        MatIconModule,
        MatToolbarModule,
        RouterModule,
        MatCarouselModule.forRoot(),
        MatCardModule,
        MatTabsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

