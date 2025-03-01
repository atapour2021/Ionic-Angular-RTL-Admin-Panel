import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';
import { dictionary } from '@dictionary/dictionary';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
    data: { breadcrumb: dictionary.Dashboard },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
