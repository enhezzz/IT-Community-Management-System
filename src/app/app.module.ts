import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {LoginDetailComponent} from "./login-detail/login-detail.component";
import {LoginedDetailComponent} from "./logined-detail/logined-detail.component";
import { HttpClientModule } from '@angular/common/http';
import { WelcomePageComponent } from './welcome/welcome-page/welcome-page.component';
import {SharedModule} from "./shared/shared.module";
@NgModule({
  declarations: [
    AppComponent,
    LoginDetailComponent,
    LoginedDetailComponent,
    WelcomePageComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
