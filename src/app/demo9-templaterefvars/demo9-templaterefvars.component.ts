import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo9-templaterefvars',
  templateUrl: './demo9-templaterefvars.component.html',
  styleUrls: ['./demo9-templaterefvars.component.css']
})
export class Demo9TemplaterefvarsComponent implements OnInit {
  logDetails(_value) {
    console.log(_value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
