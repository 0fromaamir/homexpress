import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddnewpropertypricePage } from './addnewpropertyprice.page';

const routes: Routes = [
  {
    path: '',
    component: AddnewpropertypricePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddnewpropertypricePageRoutingModule {}
