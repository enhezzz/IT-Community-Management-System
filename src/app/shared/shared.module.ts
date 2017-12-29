import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckInitService } from './check-init.service';
import { CheckLoginService } from './check-login.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [CheckInitService, CheckLoginService]
})
export class SharedModule { }
