import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'register',
    loadComponent: () => import('./register/register.page').then( m => m.RegisterPage)
  },

  {
    path: 'play',
    loadComponent: () => import('./play/play.page').then( m => m.PlayPage)
  },

  {
    path: 'reset',
    loadComponent: () => import('./reset/reset.component').then( m => m.ResetComponent)
  },  {
    path: 'search',
    loadComponent: () => import('./search/search.page').then( m => m.SearchPage)
  },


];
