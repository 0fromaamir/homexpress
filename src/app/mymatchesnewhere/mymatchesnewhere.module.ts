import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MymatchesnewherePageRoutingModule } from './mymatchesnewhere-routing.module';

import { MymatchesnewherePage } from './mymatchesnewhere.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MymatchesnewherePageRoutingModule
  ],
  declarations: [MymatchesnewherePage]
})
export class MymatchesnewherePageModule {}
