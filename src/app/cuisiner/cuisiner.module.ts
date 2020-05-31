import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuisinerPageRoutingModule } from './cuisiner-routing.module';

import { CuisinerPage } from './cuisiner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuisinerPageRoutingModule
  ],
  declarations: [CuisinerPage]
})
export class CuisinerPageModule {}
