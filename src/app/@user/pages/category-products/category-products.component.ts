import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductService } from 'src/app/@core/services/product.service';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.scss'],
})
export class CategoryProductsComponent {
  catName!: string;
  products: any = ([] = []);
  constructor(
    public activatedRoute: ActivatedRoute,
    private _productService: ProductService
  ) {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.catName = String(params.get('name'));
    });
  }
  ngOnInit(): void {
    this.callGetProducts();
  }
  callGetProducts() {
    this._productService.getProductByCatName(this.catName).subscribe(
      (data: any) => {
        this.products = data;
      },
      (err: any) => {}
    );
  }
}
