import { Route } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SobreComponent } from './components/sobre/sobre.component';

export const appRoutes: Route[] = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    title: 'Meus favoritos',
    path: 'home',
    component: HomeComponent,
  },
  {
    title: 'Sobre',
    path: 'sobre',
    component: SobreComponent,
  },
  {
    path: '',
    pathMatch: 'prefix',
    redirectTo: '/sobre',
  },
];
