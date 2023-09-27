import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PresentateursPage } from './presentateurs.page';

const routes: Routes = [
  {
    path: '',
    component: PresentateursPage
  },
  {
    path: ':id',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PresentateursPageRoutingModule {}
