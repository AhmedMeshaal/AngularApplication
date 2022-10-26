import { Component, OnInit } from '@angular/core';
// import { ImageAPIService } from "../services/image-api.service";
import { ProductsService } from "../services/products.service";

@Component({
  selector: 'app-card-grid',
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.css']
})
export class CardGridComponent implements OnInit {

  product_data:any = [];
  ImagePath = "/assets/images/logo-example.jpg";

  constructor(private productService:ProductsService) { }

  ngOnInit(): void {

    this.productService.load_product().subscribe(product_data => {
      this.product_data = product_data;
      console.log(product_data);
    })
  }

}
