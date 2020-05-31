import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProblemePagePageRoutingModule } from './probleme-page-routing.module';

import { ProblemePagePage } from './probleme-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProblemePagePageRoutingModule
  ],
  declarations: [ProblemePagePage]
})
export class ProblemePagePageModule {}
