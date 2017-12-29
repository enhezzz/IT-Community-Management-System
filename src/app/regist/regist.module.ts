import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistComponent } from './regist.component';
import {RegistRoutingModule} from "./regist-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {NgZorroAntdModule} from "ng-zorro-antd";

@NgModule({
  imports: [
    CommonModule,
    RegistRoutingModule,
    ReactiveFormsModule,
    NgZorroAntdModule
  ],
  declarations: [RegistComponent]
})
export class RegistModule { }
