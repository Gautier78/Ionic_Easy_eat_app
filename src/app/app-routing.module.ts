import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { DecouvrirPage } from "./decouvrir/decouvrir.page";
import { CuisinerPage } from "./cuisiner/cuisiner.page";
import { GnocchisPage } from "./gnocchis/gnocchis.page";
import { ProfilPage } from "./profil/profil.page";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./tabs/tabs.module").then((m) => m.TabsPageModule),
  },
  {
    path: "scan-page",
    loadChildren: () =>
      import("./scan-page/scan-page.module").then((m) => m.ScanPagePageModule),
  },
  {
    path: "scan-page",
    loadChildren: () =>
      import("./scan-page/scan-page.module").then((m) => m.ScanPagePageModule),
  },
  {
    path: "probleme-page",
    loadChildren: ".probleme-page/probleme-page.module",
  },
  {
    path: "favori",
    loadChildren: () =>
      import("./favori/favori.module").then((m) => m.FavoriPageModule),
  },
  {
    path: "recap",
    loadChildren: () =>
      import("./recap/recap.module").then((m) => m.RecapPageModule),
  },
  {
    path: "ameliorer",
    loadChildren: () =>
      import("./ameliorer/ameliorer.module").then((m) => m.AmeliorerPageModule),
  },
  {
    path: "parametre",
    loadChildren: () =>
      import("./parametre/parametre.module").then((m) => m.ParametrePageModule),
  },
  {
    path: "decouvrir",
    loadChildren: () =>
      import("./decouvrir/decouvrir.module").then((m) => m.DecouvrirPageModule),
  },
  {
    path: "cuisiner",
    loadChildren: () =>
      import("./cuisiner/cuisiner.module").then((m) => m.CuisinerPageModule),
  },
  {
    path: "gnocchis",
    loadChildren: () =>
      import("./gnocchis/gnocchis.module").then((m) => m.GnocchisPageModule),
  },
  {
    path: "profil",
    loadChildren: () =>
      import("./profil/profil.module").then((m) => m.ProfilPageModule),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
