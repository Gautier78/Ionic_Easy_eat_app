import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScanPagePageRoutingModule } from './scan-page-routing.module';

import { ScanPagePage } from './scan-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanPagePageRoutingModule
  ],
  declarations: [ScanPagePage]
})
export class ScanPagePageModule {}
