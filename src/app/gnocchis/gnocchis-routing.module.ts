import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GnocchisPage } from './gnocchis.page';

const routes: Routes = [
  {
    path: '',
    component: GnocchisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GnocchisPageRoutingModule {}
