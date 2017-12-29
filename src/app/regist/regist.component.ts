import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import 'rxjs/Rx';
import {Router} from "@angular/router";
import {CheckInitService} from "../shared/check-init.service";

interface Res{
  result:string;
}
@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.css']
})
export class RegistComponent implements OnInit {
  _isSpinning:boolean = false;
  validateForm: FormGroup;
  submitForm = ($event, value) => {
    $event.preventDefault();
    this._isSpinning = true;
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[ key ].markAsDirty();
    }
    this.http.post<Res>('/doRegister',value)
      .map(json => json.result)
      .subscribe(res => {
        this._isSpinning = false;
        console.log(value);
        console.log(res);
        this.router.navigate(['/login'])
    });

  };

  resetForm($event: MouseEvent) {
    $event.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[ key ].markAsPristine();
    }
  }

  validateConfirmPassword() {
    setTimeout(_ => {
      this.validateForm.controls[ 'passwordConfirmation' ].updateValueAndValidity();
    })
  }

  userNameAsyncValidator = (control: FormControl): any => {
    return Observable.create(function (observer) {
      setTimeout(() => {
        if (control.value === 'JasonWood') {
          observer.next({ error: true, duplicated: true });
        } else {
          observer.next(null);
        }
        observer.complete();
      }, 1000);
    });
  };

  getFormControl(name) {
    return this.validateForm.controls[ name ];
  }

  emailValidator = (control: FormControl): { [s: string]: boolean } => {
    const EMAIL_REGEXP = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
    if (!control.value) {
      return { required: true }
    } else if (!EMAIL_REGEXP.test(control.value)) {
      return { error: true, email: true };
    }
  };
  passwordConfirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls[ 'password' ].value) {
      return { confirm: true, error: true };
    }
  };
  birthDayValidator = (control: FormControl): any => {
    if (new Date(control.value) > new Date()) {
      return { expired: true, error: true }
    }
  };
  studentIdValidator = (control: FormControl): { [s: string]: boolean } =>{
    if (!control.value)
      return { required: true };
    else if(!/^[0-9]{10}$/.test(control.value)){
      return {lengthError: true,error: true}
    }
  }
  constructor(private fb: FormBuilder,private http: HttpClient,
              private router: Router,private checkInit: CheckInitService) {
    this.validateForm = this.fb.group({
      studentId          : ['',[this.studentIdValidator]],
      password            : [ '', [ Validators.required ] ],
      userName            : [ '', [ Validators.required ], [ this.userNameAsyncValidator ] ],
      email               : [ '', [ this.emailValidator ] ],
      // birthDay            : [ '', [ this.birthDayValidator ] ],
      passwordConfirmation: [ '', [ this.passwordConfirmationValidator ] ],
      comment             : [ '', [ Validators.required ] ],
      xueyuan             : ['',[ Validators.required ]],
      majorClass          : ['',[ Validators.required ]]
    });
  }

  ngOnInit() {
    this.checkInit.getState()?this.checkInit.inited():null;
  }

}
