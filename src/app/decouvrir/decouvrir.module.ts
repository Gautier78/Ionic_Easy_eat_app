import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DecouvrirPageRoutingModule } from './decouvrir-routing.module';

import { DecouvrirPage } from './decouvrir.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DecouvrirPageRoutingModule
  ],
  declarations: [DecouvrirPage]
})
export class DecouvrirPageModule {}
