import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo12-ngif',
  templateUrl: './demo12-ngif.component.html',
  styleUrls: ['./demo12-ngif.component.css']
})
export class Demo12NgifComponent implements OnInit {
  public isShow = true;
  public hasDisplay = false;

  constructor() { }

  ngOnInit(): void {
  }

}
