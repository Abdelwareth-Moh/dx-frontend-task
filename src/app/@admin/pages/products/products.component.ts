import { Component } from '@angular/core';
import { ProductService } from 'src/app/@core/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  products: any[] = [];
  constructor(private _productService: ProductService) {}
  ngOnInit() {
    this.callGetProducts();
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
