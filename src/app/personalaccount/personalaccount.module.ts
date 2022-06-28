import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalaccountPageRoutingModule } from './personalaccount-routing.module';

import { PersonalaccountPage } from './personalaccount.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalaccountPageRoutingModule
  ],
  declarations: [PersonalaccountPage]
})
export class PersonalaccountPageModule {}
