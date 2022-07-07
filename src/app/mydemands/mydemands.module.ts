import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MydemandsPageRoutingModule } from './mydemands-routing.module';

import { MydemandsPage } from './mydemands.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MydemandsPageRoutingModule
  ],
  declarations: [MydemandsPage]
})
export class MydemandsPageModule {}
