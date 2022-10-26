import { Component } from '@angular/core';
import { MatSidenav } from "@angular/material/sidenav";
import { BreakpointObserver } from "@angular/cdk/layout";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  events: string[] = [];
  opened: boolean = true;


  constructor(private breakpointObserver: BreakpointObserver) {}





}
