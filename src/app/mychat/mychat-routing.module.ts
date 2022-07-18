import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MychatPage } from './mychat.page';

const routes: Routes = [
  {
    path: '',
    component: MychatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MychatPageRoutingModule {}
