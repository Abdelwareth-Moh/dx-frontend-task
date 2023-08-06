import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductService } from 'src/app/@core/services/product.service';

@Component({
  selector: 'app-product-detailes',
  templateUrl: './product-detailes.component.html',
  styleUrls: ['./product-detailes.component.scss'],
})
export class ProductDetailesComponent {
  prodId: any;
  product: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private _productService: ProductService
  ) {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.prodId = String(params.get('id'));
      this.callGetProduct();
    });
  }
  callGetProduct() {
    this._productService.getProductById(this.prodId).subscribe(
      (data: any) => {
        this.product = data;
      },
      (err: any) => {}
    );
  }
}
