import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MychatPageRoutingModule } from './mychat-routing.module';

import { MychatPage } from './mychat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MychatPageRoutingModule
  ],
  declarations: [MychatPage]
})
export class MychatPageModule {}
