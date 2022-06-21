import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-front-page5',
  templateUrl: './front-page5.component.html',
  styleUrls: ['./front-page5.component.css']
})
export class FrontPage5Component implements OnInit {

  public successClass = 'text-success';
  public dangerClass = 'text-danger';
  public isSpecialClass = true;
  public isErrorClass = true;

  public messageClasses = {
    'text-primary': this.isSpecialClass,
    'text-strikethrough': this.isSpecialClass
  }

  constructor() { }

  ngOnInit(): void {
  }

}
