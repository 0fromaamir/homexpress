import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MypropertycharactersticsPage } from './mypropertycharacterstics.page';

const routes: Routes = [
  {
    path: '',
    component: MypropertycharactersticsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MypropertycharactersticsPageRoutingModule {}
