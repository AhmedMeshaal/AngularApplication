import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo13-ngswitch',
  templateUrl: './demo13-ngswitch.component.html',
  styleUrls: ['./demo13-ngswitch.component.css']
})
export class Demo13NgswitchComponent implements OnInit {
  // public curColor = 'red';
  public curColor = 'green';
  // public curColor = 'blue';
  // public curColor = 'black';

  constructor() { }

  ngOnInit(): void {
  }

}
