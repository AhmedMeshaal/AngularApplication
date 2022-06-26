import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  parentMessage = 'From Ahsa';
  // parentTitle = 'Ahmed Hassan';

//  parent to child
  messageChild;

}
