import { Routes } from '@angular/router';
import { dictionary } from '@dictionary/dictionary';

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
];
