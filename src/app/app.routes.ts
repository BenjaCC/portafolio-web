import { Routes } from '@angular/router';
import { HomePageComponent } from './Portafolio/home-page/home-page.component';

export const routes: Routes = [
  {
    path: 'Portafolio-web',
    component: HomePageComponent
  },

  {
    path:'**',
    redirectTo: 'Portafolio-web'
  },

];
