import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GnocchisPageRoutingModule } from './gnocchis-routing.module';

import { GnocchisPage } from './gnocchis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GnocchisPageRoutingModule
  ],
  declarations: [GnocchisPage]
})
export class GnocchisPageModule {}
