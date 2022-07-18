import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MypropertieschatPageRoutingModule } from './mypropertieschat-routing.module';

import { MypropertieschatPage } from './mypropertieschat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MypropertieschatPageRoutingModule
  ],
  declarations: [MypropertieschatPage]
})
export class MypropertieschatPageModule {}
