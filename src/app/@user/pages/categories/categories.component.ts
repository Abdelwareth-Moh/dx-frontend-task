import { Component } from '@angular/core';
import { ProductService } from 'src/app/@core/services/product.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
  categories: any[] = [];
  constructor(private _productService: ProductService) {}
  ngOnInit(): void {
    this.callGetCategories();
  }

  callGetCategories() {
    this._productService.getCategories().subscribe(
      (data: any) => {
        this.categories = data;
      },
      (err: any) => {}
    );
  }
}
