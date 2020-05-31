import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";
import { ParametrePage } from "../parametre/parametre.page";
import { FavoriPage } from "../favori/favori.page";
import { RecapPage } from "../recap/recap.page";
import { AmeliorerPage } from "../ameliorer/ameliorer.page";
import { ProblemePagePage } from "../probleme-page/probleme-page.page";
import { CuisinerPage } from "../cuisiner/cuisiner.page";
import { DecouvrirPage } from "../decouvrir/decouvrir.page";
import { from } from "rxjs";
/*

import { GnocchisPage } from "../gnocchis/gnocchis.page";
import { ProfilPage } from "../profil/profil.page";
*/

const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "tab1",
        loadChildren: () =>
          import("../tab1/tab1.module").then((m) => m.Tab1PageModule),
      },
      {
        path: "tab2",
        loadChildren: () =>
          import("../tab2/tab2.module").then((m) => m.Tab2PageModule),
      },
      {
        path: "tab3",
        loadChildren: () =>
          import("../tab3/tab3.module").then((m) => m.Tab3PageModule),
      },
      {
        path: "",
        redirectTo: "/tabs/tab1",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "",
    redirectTo: "/tabs/tab1",
    pathMatch: "full",
  },
  {
    path: "favori",
    component: FavoriPage,
  },
  {
    path: "recap",
    component: RecapPage,
  },
  {
    path: "ameliorer",
    component: AmeliorerPage,
  },
  {
    path: "parametre",
    component: ParametrePage,
  },
  {
    path: "probleme-page",
    component: ProblemePagePage,
  },
  {
    path: "cuisiner",
    component: CuisinerPage,
  },
  {
    path: "decouvrir",
    component: DecouvrirPage,
  } /*
  {
    path: "cuisiner",
    component: CuisinerPage,
  },
  
  {
    path: "decouvrir",
    component: DecouvrirPage,
  },
  {
    path: "gnocchis",
    component: GnocchisPage,
  },
  {
    path: "profil",
    component: ProfilPage,
  },*/,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
