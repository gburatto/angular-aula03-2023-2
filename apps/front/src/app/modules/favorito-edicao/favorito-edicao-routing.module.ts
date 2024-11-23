import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormFavoritoComponent } from './components/form-favorito/form-favorito.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: FormFavoritoComponent,
  },
  {
    path: ':id',
    component: FormFavoritoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoritoEdicaoRoutingModule { }
