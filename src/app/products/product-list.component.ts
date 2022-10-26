import { Component, OnInit } from '@angular/core';
// import { ImageAPIService } from "../services/image-api.service";
import { ProductsService } from "../services/products.service";

@Component({
  selector: 'app-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

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
