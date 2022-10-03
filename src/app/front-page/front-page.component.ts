import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {
  appName = 'Angular  Application';
  ImagePath = "/assets/images/logo-example.jpg";

// PRODUCTS IMAGES
  ImagePathProduct1 = "/assets/images/CT100410-CARHT_sm.jpeg";
  ImagePathProduct2 = "/assets/images/CTJ131-CARBN_sm.jpeg";
  ImagePathProduct3 = "/assets/images/CTJ162-OLIVE_sm.jpeg";
  ImagePathProduct4 = "/assets/images/CTR41-CARBN_sm.jpeg";
  AdImage = "/assets/images/ad-img.jpg";
  ImagePathProduct5 = "/assets/images/GEP002-01_sm.jpeg";
  ImagePathProduct6 = "/assets/images/GEP525-08_sm.jpeg";
  ImagePathProduct7 = "/assets/images/GET018-01_sm.jpeg";
  ImagePathProduct8 = "/assets/images/GET042-23_sm.jpeg";
  AdImage2 = "/assets/images/871-3.jpg";
  ImagePathProduct9 = "/assets/images/2245-CEIL_sm.jpeg";
  ImagePathProduct10 = "/assets/images/2278-CARIB_sm.jpeg";
  ImagePathProduct11 = "/assets/images/9133-TRUGP_sm.jpeg";
  ImagePathProduct12 = "/assets/images/9233-NAVY_sm.jpeg";
  AdImage3 = "/assets/images/ad-imagwe.jpg";
  ImagePathProduct13 = "/assets/images/5555_HUNT_sm.jpeg";
  ImagePathProduct14 = "/assets/images/9233-NAVY_sm (1).jpeg";
  ImagePathProduct15 = "/assets/images/BOP513-65_sm.jpeg";
  ImagePathProduct16 = "/assets/images/GRSP537-01_sm.jpeg";

  // FOOTER URLs
  stackoverflowUrl:string = 'https://stackoverflow.com/users/1791913/faisal?tab=profile';
  linkedinUrl:string = 'https://www.linkedin.com/in/mohammadfaysal/';
  fiverrUrl:string = 'https://www.fiverr.com/faisalmuhammad_';
  facebookUrl:string = 'https://www.facebook.com/phaysall';
  twitterUrl:string = 'https://twitter.com/faisssallll';
  githubUrl:string = 'https://github.com/faisalmuhammad';
  googleUrl:string = 'https://plus.google.com/+MuhammadFaisal04';


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
