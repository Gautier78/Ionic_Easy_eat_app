import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DecouvrirPage } from './decouvrir.page';

const routes: Routes = [
  {
    path: '',
    component: DecouvrirPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DecouvrirPageRoutingModule {}
