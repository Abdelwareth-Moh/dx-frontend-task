import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductsComponent } from './pages/products/products.component';
import { CoreModule } from '../@core/core.module';

@NgModule({
  declarations: [ProductsComponent],
  imports: [CoreModule, CommonModule, AdminRoutingModule],
})
export class AdminModule {}
