import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";

import { FrontPageComponent } from "./front-page/front-page.component";
import {ProductListComponent} from "./products/product-list.component";
import {ContactUsComponent} from "./contact-us/contact-us.component";

const routes: Routes = [
  { path: '', redirectTo: 'front-page', pathMatch: 'full', title: 'HOME'}, // REDIRECT TO PATH
  { path: 'front-page', title: 'HOME', component: FrontPageComponent },
  { path: 'contact-us', title: 'Contact Us', component: ContactUsComponent },
  { path: 'products', title: 'SHOP ALL', component: ProductListComponent }
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
