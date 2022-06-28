import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyprofilenewsletterPageRoutingModule } from './myprofilenewsletter-routing.module';

import { MyprofilenewsletterPage } from './myprofilenewsletter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyprofilenewsletterPageRoutingModule
  ],
  declarations: [MyprofilenewsletterPage]
})
export class MyprofilenewsletterPageModule {}
