import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";

import { Demo12NgifComponent } from './demo12-ngif/demo12-ngif.component';
import { Demo13NgswitchComponent } from "./demo13-ngswitch/demo13-ngswitch.component";
import { FrontPageComponent } from "./front-page/front-page.component";


const routes: Routes = [
  { path: '', redirectTo: 'front-page', pathMatch: 'full', title: 'HOME'}, // REDIRECT TO PATH
  { path: 'front-page', title: 'HOME', component: FrontPageComponent },
  { path: 'demo12-ngif', title: 'NG IF Statement', component: Demo12NgifComponent },
  { path: 'demo13-ngswitch', title: 'NG SWITCH', component: Demo13NgswitchComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
