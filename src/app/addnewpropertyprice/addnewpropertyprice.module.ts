import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddnewpropertypricePageRoutingModule } from './addnewpropertyprice-routing.module';

import { AddnewpropertypricePage } from './addnewpropertyprice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddnewpropertypricePageRoutingModule
  ],
  declarations: [AddnewpropertypricePage]
})
export class AddnewpropertypricePageModule {}
