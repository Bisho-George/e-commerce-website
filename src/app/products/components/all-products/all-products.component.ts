import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent {
  constructor(private productsService: ProductsService) {}
  products: any[] = [];
  categories: any[] = [];
  selectedOption: any = 'All';
  isLoading = false;
  ngOnInit() {
    this.getProducts();
    this.getAllCategories();
  }
  getProducts() {
    this.isLoading = true;
    this.productsService.getAllProducts().subscribe(
      (res: any) => {
        this.products = res;
        this.isLoading = false;
      },
      (err) => {
        alert('Error' + err.message);
        this.isLoading = false;
      }
    );
  }
  getAllCategories() {
    this.productsService.getAllCategories().subscribe(
      (res: any) => {
        this.categories = res;
      },
      (err) => {
        alert('Error' + err.message);
      }
    );
  }
  getProductsByCategory() {
    if (this.selectedOption == 'All') {
      this.getProducts();
      return;
    }
    this.isLoading = true;
    this.productsService.getProductByCategory(this.selectedOption).subscribe(
      (res: any) => {
        if (res) {
          this.products = res;
          this.isLoading = false;
        }
      },
      (err) => {
        alert('Error' + err.message);
        this.isLoading = false;
      }
    );
  }
}
