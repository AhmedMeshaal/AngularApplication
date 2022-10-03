import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  slides: ({ image: string })[] = [
    {'image': 'https://picsum.photos/1920/480'},
    {'image': 'https://picsum.photos/id/237/1920/480'},
    {'image': 'https://picsum.photos/1920/480?grayscale'},
    {'image': 'https://picsum.photos/1920/480/?blur'},
    {'image': 'https://picsum.photos/id/870/1920/480?grayscale&blur=2'}
  ];
  auto: any;
  // let proportion: number;
}
