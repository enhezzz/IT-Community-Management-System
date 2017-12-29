import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistComponent} from "./regist.component";

const routes: Routes = [
  {
    path:'',
    component: RegistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistRoutingModule { }
