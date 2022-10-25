import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = 'http://:::8081/api/products';
  constructor(private http: HttpClient) { }
}
