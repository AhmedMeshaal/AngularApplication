import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { FrontPageComponent } from './front-page/front-page.component';
import { FrontPage2Component } from './front-page2/front-page2.component';
import { FrontPage3Component } from './front-page3/front-page3.component';
import { FrontPage4Component } from './front-page4/front-page4.component';
import { FrontPage5Component } from './front-page5/front-page5.component';
import { FrontPage6Component } from './front-page6/front-page6.component';
import { Demo8EventbindingComponent } from './demo8-eventbinding/demo8-eventbinding.component';
import { Demo9TemplaterefvarsComponent } from './demo9-templaterefvars/demo9-templaterefvars.component';
import { Demo10OnewaydatabindingComponent } from './demo10-onewaydatabinding/demo10-onewaydatabinding.component';
import {FormsModule} from "@angular/forms";
import { Demo11TwowaydatabindingComponent } from './demo11-twowaydatabinding/demo11-twowaydatabinding.component';
import { Demo12NgifComponent } from './demo12-ngif/demo12-ngif.component';
import { Demo13NgswitchComponent } from './demo13-ngswitch/demo13-ngswitch.component';
import { Demo14NgforComponent } from './demo14-ngfor/demo14-ngfor.component';
import { Demo15ChildparenComponent } from './demo15-childparen/demo15-childparen.component';
import { Demo16PipesfiltersComponent } from './demo16-pipesfilters/demo16-pipesfilters.component';


import { EmployeeService } from "./services/employee.service";
import { EmployeeHttpService } from "./services/employee-http.service";
import { Demo17ServiceemployeelistComponent } from './demo17-serviceemployeelist/demo17-serviceemployeelist.component';


import { HttpClientModule } from "@angular/common/http";
import { EmployeeHttpListComponent } from './employee-http-list/employee-http-list.component';
import { BlueHighlightDirective } from './directives/blue-highlight.directive';
import { HighlightClickDirective } from './directives/highlight-click.directive';
import { SquareRootPipePipe } from './pipe/square-root-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    FrontPage2Component,
    FrontPage3Component,
    FrontPage4Component,
    FrontPage5Component,
    FrontPage6Component,
    Demo8EventbindingComponent,
    Demo9TemplaterefvarsComponent,
    Demo10OnewaydatabindingComponent,
    Demo11TwowaydatabindingComponent,
    Demo12NgifComponent,
    Demo13NgswitchComponent,
    Demo14NgforComponent,
    Demo15ChildparenComponent,
    Demo16PipesfiltersComponent,
    Demo17ServiceemployeelistComponent,
    EmployeeHttpListComponent,
    BlueHighlightDirective,
    HighlightClickDirective,
    SquareRootPipePipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeeService,EmployeeHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

