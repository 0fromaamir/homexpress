import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MymatchesPageRoutingModule } from './mymatches-routing.module';

import { MymatchesPage } from './mymatches.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MymatchesPageRoutingModule
  ],
  declarations: [MymatchesPage]
})
export class MymatchesPageModule {}
