import { Component, OnInit } from '@angular/core';
import { ImageAPIService } from "../services/image-api.service";

@Component({
  selector: 'app-card-grid',
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.css']
})
export class CardGridComponent implements OnInit {
  public memes: any;
  public data: any;
  // private ImageAPIService: any;

  constructor(private service:ImageAPIService) { }

  ngOnInit(): void {

    this.service.getMemes().subscribe(response =>{

        console.log(response);
        this.memes = response.data.memes;
    })
  }

  ImagePath = "/assets/images/logo-example.jpg";

 uniformImages: Array<{url: string, title: string, price: number}> =
   [
     {url: '/assets/images/UniformList/0115-01_sm.jpeg', title: 'uniform one', price: 50},
     {url: '/assets/images/UniformList/042X-GY__sm.jpeg', title: 'uniform one', price: 50},
     {url: '/assets/images/UniformList/044X-WH__sm.jpeg', title: 'uniform one', price: 50},
     {url: '/assets/images/UniformList/83-1_sm.jpg', title: 'uniform one', price: 50},
     {url: '/assets/images/UniformList/100_ROYA_sm.jpeg', title: 'uniform one', price: 50},
     {url: '/assets/images/UniformList/101_BLAC_sm.jpeg', title: 'uniform one', price: 50},
     {url: '/assets/images/UniformList/102_NAVY_sm.jpeg', title: 'uniform one', price: 50}
   ];

  uniformImages2: Array<{url: string, title: string, price: number}> =
    [
      {url: '/assets/images/UniformList/103_PEWT_sm.jpeg', title: 'uniform two', price: 100},
      {url: '/assets/images/UniformList/0914-10_sm.jpeg', title: 'uniform two', price: 100},
      {url: '/assets/images/UniformList/1121-NAVY_sm.jpg', title: 'uniform two', price: 100},
      {url: '/assets/images/UniformList/1123-BLAC_sm.jpg', title: 'uniform two', price: 100},
      {url: '/assets/images/UniformList/2121-01_sm.jpeg', title: 'uniform two', price: 100},
      {url: '/assets/images/UniformList/2167-GALBL_sm.jpeg', title: 'uniform two', price: 100},
      {url: '/assets/images/UniformList/2320-CEIL_sm.jpeg', title: 'uniform two', price: 100}
    ];

  uniformImages3: Array<{url: string, title: string, price: number}> =
    [
      {url: '/assets/images/UniformList/2330-CARIB_sm.jpeg', title: 'uniform two', price: 100},
      {url: '/assets/images/UniformList/2331-ROYAL_sm.jpeg', title: 'uniform two', price: 100},
      {url: '/assets/images/UniformList/2402-10_sm.jpeg', title: 'uniform two', price: 100},
      {url: '/assets/images/UniformList/4455-10_sm.jpeg', title: 'uniform two', price: 100},
      {url: '/assets/images/UniformList/4481-10_sm.jpeg', title: 'uniform two', price: 100},
      {url: '/assets/images/UniformList/6208_GAP_sm.jpeg', title: 'uniform two', price: 100},
      {url: '/assets/images/UniformList/6434_CEIL_sm.jpeg', title: 'uniform two', price: 100}
    ];

}
