import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsUserGuard } from '../@core/guards/is-user.guard';
import { CategoriesComponent } from './pages/categories/categories.component';

const routes: Routes = [
  {
    path: '',
    canLoad: [IsUserGuard],
    component: CategoriesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
