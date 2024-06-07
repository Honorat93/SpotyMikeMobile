import { Routes } from '@angular/router';
import { authGuard } from './guard/auth.guard';

export const routes: Routes = [
  {
    path: 'tabs',
    loadComponent: () => import('./pages/tabs/tabs.page').then(m => m.TabsPage),
    canActivate: [authGuard],
    children: [
      {
        path: 'home',
        loadComponent: () => import('./pages/home/home.page').then(m => m.HomePage),
        canActivate: [authGuard],
      },
      {
        path: 'profile',
        loadComponent: () => import('./pages/profile/profile.page').then(m => m.ProfilePage),
        canActivate: [authGuard],
      },
      {
        path: 'music-playlist',
        loadComponent: () => import('./pages/music-playlist/music-playlist.page').then(m => m.MusicPlaylistPage),
        canActivate: [authGuard],
      },
      {
        path: 'favorites',
        loadComponent: () => import('./pages/favorites/favorites.page').then(m => m.FavoritesPage),
        canActivate: [authGuard],
      },
      {
        path: 'see-all',
        loadComponent: () => import('./pages/see-all/see-all.page').then(m => m.SeeAllPage),
        canActivate: [authGuard],
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage),
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.page').then(m => m.RegisterPage),
  },
];
