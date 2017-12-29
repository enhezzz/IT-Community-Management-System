import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login.component";

const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  },
  {
    path: 'work',
    loadChildren:'app/work/work.module#WorkModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
