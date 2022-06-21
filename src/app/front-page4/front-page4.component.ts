import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-front-page4',
  templateUrl: './front-page4.component.html',
  styleUrls: ['./front-page4.component.css']
})
export class FrontPage4Component implements OnInit {
  public _id = 'id1';
  public _isDisabled1 = true;
  public _isDisabled2 = false;

  constructor() { }

  ngOnInit(): void {
  }

}
