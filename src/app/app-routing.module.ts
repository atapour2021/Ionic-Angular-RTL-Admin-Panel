import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ApplicationComponent } from '@app/layout';
import { CONTENT_ROUTES } from '@app/shared';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/app/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'app',
    component: ApplicationComponent,
    children: CONTENT_ROUTES,
  },
  {
    path: 'product',
    loadChildren: () =>
      import('./modules/product/product.module').then(
        (m) => m.ProductPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
