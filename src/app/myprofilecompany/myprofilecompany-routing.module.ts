import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyprofilecompanyPage } from './myprofilecompany.page';

const routes: Routes = [
  {
    path: '',
    component: MyprofilecompanyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyprofilecompanyPageRoutingModule {}
