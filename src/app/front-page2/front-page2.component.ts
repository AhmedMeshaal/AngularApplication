import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-front-page2',
  // templateUrl: './front-page2.component.html',
  template:`
    <h1>component-demo2-template templateUrl works!</h1>

    <h2>template</h2>
    template denotes writing html markup in current class file only, template property can help to write all html/markup in .ts typescript file itself.

    <p> Multiple line template </p>
    <div> template written in same .ts file </div>
  `,
  // styleUrls: ['./front-page2.component.css']

  styles: [`
    h1{
      text-align:center;
    }

    div{
      border:2px dashed gray;
    }
  `]
})
export class FrontPage2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
