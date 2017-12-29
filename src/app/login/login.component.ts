import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormBuilder, FormControl} from "@angular/forms";
import {Observable} from "rxjs/Observable";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {CheckInitService} from "../shared/check-init.service";
import {CheckLoginService} from "../shared/check-login.service";
import {NzMessageService, NzNotificationService} from "ng-zorro-antd";
interface Res{
  result:string;
  userName?: string;
  studentId?: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;
  _isSpinning:boolean = false;
  _submitForm() {
    this._isSpinning = true;
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      console.log(this.validateForm.controls[ i ])

    }
    console.log(this.validateForm.value)
    this.http.post<Res>('/doLogin',this.validateForm.value)
      .subscribe(res => {
        this._isSpinning = false;
        if(res.result === 'succeed'){
          this.router.navigate(['work'],{relativeTo: this.activatedRoute });
          // this.router.navigate([{ outlets: { identity: ['logined'] } }]);

          // this.router.navigate(['/login/work']);
          console.log(res.userName);
          this.checkLogin.changeLoginState();
          this.checkLogin.setUserName(res.userName);
          this.checkLogin.setStudentId(res.studentId);
          this._message.create('success', '登录成功！');


        }else{
          this._message.create('error', '你输入的信息有误！');
        }

      });

  }
  constructor(private fb: FormBuilder,
              private router: Router,
              private http: HttpClient,
              private checkInit: CheckInitService,
              private checkLogin: CheckLoginService,
              private _message: NzMessageService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      studentId: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
      // remember: [ true ],
    });
    this.checkInit.getState()?this.checkInit.inited():null;
  }


}
