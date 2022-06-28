import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyprofilecompanyaccountPageRoutingModule } from './myprofilecompanyaccount-routing.module';

import { MyprofilecompanyaccountPage } from './myprofilecompanyaccount.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyprofilecompanyaccountPageRoutingModule
  ],
  declarations: [MyprofilecompanyaccountPage]
})
export class MyprofilecompanyaccountPageModule {}
