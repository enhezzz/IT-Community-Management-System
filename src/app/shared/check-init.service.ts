import { Injectable } from '@angular/core';
import { CheckLoginService } from './check-login.service';

@Injectable()
export class CheckInitService {
  isInit: boolean = true;
  constructor(private checkLoginInfo: CheckLoginService) {
    this.isInit = this.checkLoginInfo.isLogin;
   }
  getState(){
    return this.isInit;
  }
  inited(): void {this.isInit = false}
}
