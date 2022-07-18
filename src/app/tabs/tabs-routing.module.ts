import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
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
        path: 'myprofile',
        loadChildren: () => import('../myprofile/myprofile.module').then( m => m.MyprofilePageModule)
      },
      {
        path: 'mypropertieschat',
        loadChildren: () => import('../mypropertieschat/mypropertieschat.module').then( m => m.MypropertieschatPageModule)
      },
      {
        path: 'addnewpropertylocation',
        loadChildren: () => import('../addnewpropertylocation/addnewpropertylocation.module').then( m => m.AddnewpropertylocationPageModule)
      },
      {
        path: 'addnewpropertyprice',
        loadChildren: () => import('../addnewpropertyprice/addnewpropertyprice.module').then( m => m.AddnewpropertypricePageModule)
      },
      {
        path: 'addnewpropertymedia',
        loadChildren: () => import('../addnewpropertymedia/addnewpropertymedia.module').then( m => m.AddnewpropertymediaPageModule)
      },
      {
        path: 'addnewdemand',
        loadChildren: () => import('../addnewdemand/addnewdemand.module').then( m => m.AddnewdemandPageModule)
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
