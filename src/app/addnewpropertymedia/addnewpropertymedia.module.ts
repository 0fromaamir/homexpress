import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddnewpropertymediaPageRoutingModule } from './addnewpropertymedia-routing.module';

import { AddnewpropertymediaPage } from './addnewpropertymedia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddnewpropertymediaPageRoutingModule
  ],
  declarations: [AddnewpropertymediaPage]
})
export class AddnewpropertymediaPageModule {}
