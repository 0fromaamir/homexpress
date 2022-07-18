import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddnewdemandPage } from './addnewdemand.page';

const routes: Routes = [
  {
    path: '',
    component: AddnewdemandPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddnewdemandPageRoutingModule {}
