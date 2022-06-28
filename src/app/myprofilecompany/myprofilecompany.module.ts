import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyprofilecompanyPageRoutingModule } from './myprofilecompany-routing.module';

import { MyprofilecompanyPage } from './myprofilecompany.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyprofilecompanyPageRoutingModule
  ],
  declarations: [MyprofilecompanyPage]
})
export class MyprofilecompanyPageModule {}
