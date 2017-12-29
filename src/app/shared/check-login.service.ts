import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class CheckLoginService {
  isLogin: boolean = false;
  userName:string = '游客';
  studentId: string;
  constructor(private http: HttpClient) {
    this.getUserName()
   }
  getLoginState(): boolean{return this.isLogin};
  changeLoginState(): void{
    this.isLogin = !this.isLogin;
    // return this;
  }
  setUserName(userName: string): void{
    this.userName = userName;
    // return this;
  }
  setStudentId(studentId: string): void{
    this.studentId = studentId;
  }
  getUserName(): any{
    this.http.get('/doLogin/checkLogin')
    .subscribe(res => {
      if(res['isLogin']){
        console.log(res['userName'])
        this.isLogin = true;
        this.userName = res['userName'];
        this.studentId = res['studentId'];
      }
      //return this.userName;
    });
    //return this.userName;
  }
}
