import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AmeliorerPageRoutingModule } from './ameliorer-routing.module';

import { AmeliorerPage } from './ameliorer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmeliorerPageRoutingModule
  ],
  declarations: [AmeliorerPage]
})
export class AmeliorerPageModule {}
