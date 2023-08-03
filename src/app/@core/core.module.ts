import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { NavbarComponent } from './components/layout-components/navbar/navbar.component';
import { FooterComponent } from './components/layout-components/footer/footer.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [CommonModule, CoreRoutingModule],
  exports: [NavbarComponent, FooterComponent],
})
export class CoreModule {}
