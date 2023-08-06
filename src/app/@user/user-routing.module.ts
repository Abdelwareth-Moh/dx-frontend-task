import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsUserGuard } from '../@core/guards/is-user.guard';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CategoryProductsComponent } from './pages/category-products/category-products.component';
import { ProductDetailesComponent } from './pages/product-detailes/product-detailes.component';

const routes: Routes = [
  {
    path: '',
    canLoad: [IsUserGuard],
    component: CategoriesComponent,
  },
  {
    path: 'category-products/:name',
    canLoad: [IsUserGuard],
    component: CategoryProductsComponent,
  },
  {
    path: 'product-detailes/:id',
    canLoad: [IsUserGuard],
    component: ProductDetailesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
