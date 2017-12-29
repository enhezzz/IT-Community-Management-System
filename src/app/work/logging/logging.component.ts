import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {NzNotificationService} from "ng-zorro-antd";
import {GetPresenceInfoService} from "../get-presence-info.service";
import {HttpClient} from "@angular/common/http";
import {CheckLoginService} from "../../shared/check-login.service";
import * as dateFormat from "dateformat/lib/dateformat"
@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.css']
})
export class LoggingComponent implements OnInit {
  loggingState: boolean = false;
  loggingInfo: string = '签到';
  presenceInfo: string[] = [];
  constructor(private router: Router,
              private _notification: NzNotificationService,
              private presenceService: GetPresenceInfoService,
              private http: HttpClient,
              private loginInfo: CheckLoginService) { }

  ngOnInit() {
    this.router.navigate([{ outlets: { identity: ['logined'] } }]);
    console.log(this.loginInfo.studentId);
    console.log(dateFormat(new Date(), "yyyy-mm-dd"))
    this.http.get(`/presence/record?studentId=${this.loginInfo.studentId}`)
      .subscribe(res => {
        console.log(res);
        if(res['result'].includes(dateFormat(new Date(),"yyyy-mm-dd"))){
          this.loggingState = true;
          this.loggingInfo = '已签到';
        }else{
          setTimeout(() => {
            this._notification.blank('今天的你非非常勤奋', '先签一下到吧~', {nzDuration: 0});
          },500)
        }
        this.presenceInfo = res['result'];
      })

  }
  logging(){
    // this.loggingState = !this.loggingState;

    this.http.post('/presence',{
      userName: this.loginInfo.userName,
      studentId: this.loginInfo.studentId,
      date: dateFormat(new Date(), "yyyy-mm-dd")
    }).subscribe(res => {
      this.loggingInfo = '已签到';
      this.loggingState = true;
    })
  }
  confirmPresence(day: any){
    return this.presenceInfo.includes(day['title']);
  }
}
