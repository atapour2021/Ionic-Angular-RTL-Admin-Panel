import { Routes } from '@angular/router';

export const CONTENT_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadChildren: () =>
      import('@modules/index').then((m) => m.FolderPageModule),
  },

  {
    path: 'dashboard',
    loadChildren: () =>
      import('@app/modules').then((m) => m.DashboardPageModule),
  },

  {
    path: 'products',
    loadChildren: () => import('@app/modules').then((m) => m.ProductPageModule),
  },
];
