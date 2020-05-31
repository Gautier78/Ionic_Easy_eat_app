import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ProblemePagePage } from "./probleme-page.page";

const routes: Routes = [
  {
    path: "",
    component: ProblemePagePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProblemePagePageRoutingModule {}
