import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProplanPage } from './proplan.page';

const routes: Routes = [
  {
    path: '',
    component: ProplanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProplanPageRoutingModule {}
