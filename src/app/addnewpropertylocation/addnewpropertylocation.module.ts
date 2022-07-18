import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddnewpropertylocationPageRoutingModule } from './addnewpropertylocation-routing.module';

import { AddnewpropertylocationPage } from './addnewpropertylocation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddnewpropertylocationPageRoutingModule
  ],
  declarations: [AddnewpropertylocationPage]
})
export class AddnewpropertylocationPageModule {}
