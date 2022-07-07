import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MypropertycharactersticsPageRoutingModule } from './mypropertycharacterstics-routing.module';

import { MypropertycharactersticsPage } from './mypropertycharacterstics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MypropertycharactersticsPageRoutingModule
  ],
  declarations: [MypropertycharactersticsPage]
})
export class MypropertycharactersticsPageModule {}
