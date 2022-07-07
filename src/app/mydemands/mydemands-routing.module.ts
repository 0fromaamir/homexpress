import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MydemandsPage } from './mydemands.page';

const routes: Routes = [
  {
    path: '',
    component: MydemandsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MydemandsPageRoutingModule {}
