import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginedDetailComponent } from '../logined-detail/logined-detail.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NgZorroAntdModule} from "ng-zorro-antd";

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
  ],
  declarations: [LoginComponent],

})
export class LoginModule { }
