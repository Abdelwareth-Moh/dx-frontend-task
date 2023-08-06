import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsUserGuard } from './@core/guards/is-user.guard';
import { IsAdminGuard } from './@core/guards/is-admin.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./@core/auth/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'categories',
    loadChildren: () => import('./@user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'on-shopping',
    loadChildren: () =>
      import('./@features/features.module').then((m) => m.FeaturesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
