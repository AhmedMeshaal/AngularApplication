import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bannar',
  templateUrl: './bannar.component.html',
  styleUrls: ['./bannar.component.css']
})
export class BannarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ImagePath = "/assets/images/logo-example.jpg";
}
