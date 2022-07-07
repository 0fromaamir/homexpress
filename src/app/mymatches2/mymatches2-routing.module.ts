import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mymatches2Page } from './mymatches2.page';

const routes: Routes = [
  {
    path: '',
    component: Mymatches2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mymatches2PageRoutingModule {}
