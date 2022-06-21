import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-front-page6',
  templateUrl: './front-page6.component.html',
  styleUrls: ['./front-page6.component.css']
})
export class FrontPage6Component implements OnInit {
  public greenColor = 'green';
  public redColor = 'red';
  public orangeColor = 'orange';
  public hasError = true;

  public headerStyles = {
    color: 'blue',
    textDecoration: 'line-through',
    fontStyle: 'italic'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
