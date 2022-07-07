import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'proplan',
        loadChildren: () => import('../proplan/proplan.module').then( m => m.ProplanPageModule)
      },
      {
        path: 'homepage',
        loadChildren: () => import('../homepage/homepage.module').then( m => m.HomepagePageModule)
      },
      {
        path: 'addnewproperty',
        loadChildren: () => import('../addnewproperty/addnewproperty.module').then( m => m.AddnewpropertyPageModule)
      },
      {
        path: 'myproperties',
        loadChildren: () => import('../myproperties/myproperties.module').then( m => m.MypropertiesPageModule)
      },
      {
        path: 'mymatches',
        loadChildren: () => import('../mymatches/mymatches.module').then( m => m.MymatchesPageModule)
      },
      {
        path: 'mypropertycharacterstics',
        loadChildren: () => import('../mypropertycharacterstics/mypropertycharacterstics.module').then( m => m.MypropertycharactersticsPageModule)
      },
      {
        path: 'mydemands',
        loadChildren: () => import('../mydemands/mydemands.module').then( m => m.MydemandsPageModule)
      },
      {
        path: 'mymatches2',
        loadChildren: () => import('../mymatches2/mymatches2.module').then( m => m.Mymatches2PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
