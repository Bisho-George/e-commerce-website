import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}
  getAllProducts() {
    return this.http.get(environment.baseUrl + 'products');
  }
  getAllCategories() {
    return this.http.get(environment.baseUrl + 'products/categories');
  }
  getProductByCategory(category: string) {
    return this.http.get(environment.baseUrl + 'products/category/' + category);
  }
}
