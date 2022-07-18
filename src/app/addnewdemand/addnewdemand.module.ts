import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddnewdemandPageRoutingModule } from './addnewdemand-routing.module';

import { AddnewdemandPage } from './addnewdemand.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddnewdemandPageRoutingModule
  ],
  declarations: [AddnewdemandPage]
})
export class AddnewdemandPageModule {}
