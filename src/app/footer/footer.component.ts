import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  stackoverflowUrl:string = 'https://stackoverflow.com/users/1791913/faisal?tab=profile';
  linkedinUrl:string = 'https://www.linkedin.com/in/mohammadfaysal/';
  fiverrUrl:string = 'https://www.fiverr.com/faisalmuhammad_';
  facebookUrl:string = 'https://www.facebook.com/phaysall';
  twitterUrl:string = 'https://twitter.com/faisssallll';
  githubUrl:string = 'https://github.com/faisalmuhammad';
  googleUrl:string = 'https://plus.google.com/+MuhammadFaisal04';
}
