import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-demo15-childparen',
  templateUrl: './demo15-childparen.component.html',
  styleUrls: ['./demo15-childparen.component.css']
})
export class Demo15ChildparenComponent implements OnInit {

  // receive data/value coming from parent component to child
  @Input() public parentData;
  // @Input() public parentName;

  // alias based method
  // @Input('parentData') public parentName;


  //  child to parent

  // create child event to send to parent
  @Output() public childEvent = new EventEmitter();

  // child event handler function
  childFireEvent() {
    this.childEvent.emit("Message from child to parent");
  }


  constructor() { }

  ngOnInit(): void {
  }

}
