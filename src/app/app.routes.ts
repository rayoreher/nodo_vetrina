import { Routes } from '@angular/router';

export const routes: Routes = [
    {
      path: '',
      loadChildren: () => import('./pages/home/home.routes').then(m => m.HOME_ROUTES)
    },
    {
      path: 'charity',
      loadChildren: () => import('./pages/charity/charity.routes').then(m => m.CHARITY_ROUTES)
    },
    {
      path: 'cart',
      loadChildren: () => import('./pages/cart/cart.routes').then(m => m.CART_ROUTES)
    },
    // {
    //   path: 'auth',
    //   loadChildren: () => import('./pages/auth/auth.routes').then(m => m.AUTH_ROUTES)
    // },
    // {
    //   path: 'login',
    //   loadChildren: () => import('./pages/login/login.routes').then(m => m.LOGIN_ROUTES)
    // },
    //{ path: '**', redirectTo: '' }
  ];