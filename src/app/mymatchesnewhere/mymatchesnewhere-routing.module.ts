import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MymatchesnewherePage } from './mymatchesnewhere.page';

const routes: Routes = [
  {
    path: '',
    component: MymatchesnewherePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MymatchesnewherePageRoutingModule {}
