import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-front-page3',
  templateUrl: './front-page3.component.html',
  styleUrls: ['./front-page3.component.css']
})
export class FrontPage3Component implements OnInit {

  public technology = 'Angular Framework';
  public userName = 'raymondTey';
  // public siteUrl = 'http://www.google.com';
  public siteUrl = window.location.href;

  fn_showGreetingsToUser() {
    return 'Welcome ' + this.userName;
  }

  fn_showMessage() {
    return 'Welcome to ' + this.technology + ' ' + this.userName;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
