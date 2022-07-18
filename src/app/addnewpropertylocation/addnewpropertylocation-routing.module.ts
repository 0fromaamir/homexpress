import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddnewpropertylocationPage } from './addnewpropertylocation.page';

const routes: Routes = [
  {
    path: '',
    component: AddnewpropertylocationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddnewpropertylocationPageRoutingModule {}
