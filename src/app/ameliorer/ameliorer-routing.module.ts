import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmeliorerPage } from './ameliorer.page';

const routes: Routes = [
  {
    path: '',
    component: AmeliorerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmeliorerPageRoutingModule {}
