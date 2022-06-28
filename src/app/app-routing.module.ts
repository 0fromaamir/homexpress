import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path:'',
    pathMatch:'full',
    redirectTo:'splash'
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
 
  {
    path: 'personalaccount',
    loadChildren: () => import('./personalaccount/personalaccount.module').then( m => m.PersonalaccountPageModule)
  },
  {
    path: 'myprofile',
    loadChildren: () => import('./myprofile/myprofile.module').then( m => m.MyprofilePageModule)
  },
  {
    path: 'myprofilenewsletter',
    loadChildren: () => import('./myprofilenewsletter/myprofilenewsletter.module').then( m => m.MyprofilenewsletterPageModule)
  },
  {
    path: 'myprofilecompany',
    loadChildren: () => import('./myprofilecompany/myprofilecompany.module').then( m => m.MyprofilecompanyPageModule)
  },
  {
    path: 'myprofilecompanyaccount',
    loadChildren: () => import('./myprofilecompanyaccount/myprofilecompanyaccount.module').then( m => m.MyprofilecompanyaccountPageModule)
  },
  {
    path: 'newsletter',
    loadChildren: () => import('./newsletter/newsletter.module').then( m => m.NewsletterPageModule)
  },
  {
    path: 'proplan',
    loadChildren: () => import('./proplan/proplan.module').then( m => m.ProplanPageModule)
  },
  {
    path: 'homepage',
    loadChildren: () => import('./homepage/homepage.module').then( m => m.HomepagePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}