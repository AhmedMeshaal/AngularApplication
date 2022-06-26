import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo10-onewaydatabinding',
  templateUrl: './demo10-onewaydatabinding.component.html',
  styleUrls: ['./demo10-onewaydatabinding.component.css']
})
export class Demo10OnewaydatabindingComponent implements OnInit {
  public inputResultValue = 'One Way Data Binding';

  public userNameText = 'Angular Seven';

  public changeInputText(evt) {
    console.log(evt);
    this.userNameText = evt.target.value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
