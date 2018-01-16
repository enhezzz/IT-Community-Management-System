import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import {LoginDetailComponent} from "./login-detail/login-detail.component";
import {LoginedDetailComponent} from "./logined-detail/logined-detail.component";


const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/login/login.module#LoginModule',
  },  {
    path: 'regist',
    loadChildren: 'app/regist/regist.module#RegistModule',
  },
  {
    path: 'no-login',
    component: LoginDetailComponent,
    outlet: 'identity'
  },  {
    path: 'logined',
    component: LoginedDetailComponent,
    outlet: 'identity'
  },
  // {
  //   path: '',
  //   redirectTo: "[{ outlets: { identity: ['no-login'] } }]",
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { //enableTracing: true ,
      preloadingStrategy: PreloadAllModules
    } )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
