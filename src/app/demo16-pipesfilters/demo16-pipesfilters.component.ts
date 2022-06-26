import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo16-pipesfilters',
  templateUrl: './demo16-pipesfilters.component.html',
  styleUrls: ['./demo16-pipesfilters.component.css']
})
export class Demo16PipesfiltersComponent implements OnInit {
  public nameText = 'Angular js';
  public messageText = 'Welcome to Angularjs';
  public greetingText = 'angular 2/4/5/6 is component based / developing depending on that';

  public objTechnology = {
    'firstName': 'angular',
    'lastName': 'js',
    'version': 6.0
  }

  public number = 5.7089;

  public currentDate = Date();

  constructor() { }

  ngOnInit(): void {
  }

}
