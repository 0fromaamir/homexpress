import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MymatchesPage } from './mymatches.page';

const routes: Routes = [
  {
    path: '',
    component: MymatchesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MymatchesPageRoutingModule {}
