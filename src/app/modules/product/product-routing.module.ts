import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductPage } from './product.page';
import { dictionary } from '@dictionary/dictionary';

const routes: Routes = [
  {
    path: '',
    component: ProductPage,
    data: { breadcrumb: dictionary.Products },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductPageRoutingModule {}
