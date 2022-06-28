import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddnewpropertyPageRoutingModule } from './addnewproperty-routing.module';

import { AddnewpropertyPage } from './addnewproperty.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddnewpropertyPageRoutingModule
  ],
  declarations: [AddnewpropertyPage]
})
export class AddnewpropertyPageModule {}
