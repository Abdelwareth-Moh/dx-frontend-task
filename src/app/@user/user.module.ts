import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CategoryProductsComponent } from './pages/category-products/category-products.component';
import { ProductDetailesComponent } from './pages/product-detailes/product-detailes.component';


@NgModule({
  declarations: [
    CategoriesComponent,
    CategoryProductsComponent,
    ProductDetailesComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
