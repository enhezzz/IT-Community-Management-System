import "rxjs/add/operator/map";
import "rxjs/add/operator/take";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { CheckLoginService } from "../../shared/check-login.service";
import * as dateFormat from "dateformat/lib/dateformat";

@Injectable()
export class LogResolver implements Resolve<Array<string>> {
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): string[] | Observable<string[]> | Promise<string[]> {
    return this.http
      .get<{ result: Array<string> }>(
        `/presence/record?studentId=${this.loginInfo.studentId}`
      )
      .map(res => res.result);
  }

  constructor(
    private http: HttpClient,
    private router: Router,
    private loginInfo: CheckLoginService
  ) {}
}
