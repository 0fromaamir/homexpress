import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddnewpropertyPage } from './addnewproperty.page';

const routes: Routes = [
  {
    path: '',
    component: AddnewpropertyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddnewpropertyPageRoutingModule {}
