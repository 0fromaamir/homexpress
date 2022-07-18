import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MypropertieschatPage } from './mypropertieschat.page';

const routes: Routes = [
  {
    path: '',
    component: MypropertieschatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MypropertieschatPageRoutingModule {}
