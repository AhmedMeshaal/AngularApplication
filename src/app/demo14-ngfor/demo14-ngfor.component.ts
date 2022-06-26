import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo14-ngfor',
  templateUrl: './demo14-ngfor.component.html',
  styleUrls: ['./demo14-ngfor.component.css']
})
export class Demo14NgforComponent implements OnInit {

  public arrColors = ['red', 'green', 'blue', 'cyan', 'magenta', 'black'];
  // public arrColors = ['red', 'green', 'blue'];

  constructor() { }

  ngOnInit(): void {
  }

}
