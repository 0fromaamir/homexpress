import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MypropertiesPageRoutingModule } from './myproperties-routing.module';

import { MypropertiesPage } from './myproperties.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MypropertiesPageRoutingModule
  ],
  declarations: [MypropertiesPage]
})
export class MypropertiesPageModule {}
