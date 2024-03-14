import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'Ulster',
    loadComponent: () => import('./ulster/ulster.page').then( m => m.UlsterPage)
  },
  {
    path: 'Munster',
    loadComponent: () => import('./munster/munster.page').then( m => m.MunsterPage)
  },
  {
    path: 'Connaught',
    loadComponent: () => import('./connaught/connaught.page').then( m => m.ConnaughtPage)
  },
  {
    path: 'Leinster',
    loadComponent: () => import('./leinster/leinster.page').then( m => m.LeinsterPage)
  },
  {
    path: 'leinster-counties',
    loadComponent: () => import('./leinster-counties/leinster-counties.page').then( m => m.LeinsterCountiesPage)
  },
];
