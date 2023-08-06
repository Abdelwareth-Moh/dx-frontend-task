import { Component } from '@angular/core';
import { ProductService } from 'src/app/@core/services/product.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
  categories: any[] = [];
  products: any[] = [];
  constructor(private _productService: ProductService) {}
  ngOnInit(): void {
    this.callGetCategories();
    this.callGetProducts();
  }

  callGetCategories() {
    this._productService.getCategories().subscribe(
      (data: any) => {
        this.categories = data;
      },
      (err: any) => {}
    );
  }
  callGetProducts() {
    this._productService.getProducts().subscribe(
      (data: any) => {
        this.products = data;
      },
      (err: any) => {}
    );
  }
}
