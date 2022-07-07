import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mymatches2PageRoutingModule } from './mymatches2-routing.module';

import { Mymatches2Page } from './mymatches2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mymatches2PageRoutingModule
  ],
  declarations: [Mymatches2Page]
})
export class Mymatches2PageModule {}
