import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyprofilecompanyaccountPage } from './myprofilecompanyaccount.page';

const routes: Routes = [
  {
    path: '',
    component: MyprofilecompanyaccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyprofilecompanyaccountPageRoutingModule {}
