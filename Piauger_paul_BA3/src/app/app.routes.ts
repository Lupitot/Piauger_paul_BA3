import { Routes } from '@angular/router';
import { PageAccueilComponent } from './pages/page-accueil/page-accueil.component';
import { PagePanierComponent } from './pages/page-panier/page-panier.component';
import { PageCheckoutComponent } from './pages/page-checkout/page-checkout.component';

export const routes: Routes = [
  {
    path: '',
    component: PageAccueilComponent,
  },
  {
    path: 'panier',
    component: PagePanierComponent,
  },

  {
    path: 'checkout',
    component: PageCheckoutComponent,
  },

  {
    path: '**',
    redirectTo: '',
  },
];
