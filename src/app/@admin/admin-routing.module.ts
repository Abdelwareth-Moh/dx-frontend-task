import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsAdminGuard } from '../@core/guards/is-admin.guard';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  {
    path: '',
    canLoad: [IsAdminGuard],
    component: ProductsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
