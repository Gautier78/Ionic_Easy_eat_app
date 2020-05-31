import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuisinerPage } from './cuisiner.page';

const routes: Routes = [
  {
    path: '',
    component: CuisinerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuisinerPageRoutingModule {}
