import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo11-twowaydatabinding',
  templateUrl: './demo11-twowaydatabinding.component.html',
  styleUrls: ['./demo11-twowaydatabinding.component.css']
})
export class Demo11TwowaydatabindingComponent implements OnInit {
  public nameText = 'Angular 7 its working';


  constructor() { }

  ngOnInit(): void {
  }

}
