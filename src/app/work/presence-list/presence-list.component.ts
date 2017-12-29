import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {CheckLoginService} from "../../shared/check-login.service";
@Injectable()
export class RandomUserService {
  randomUserUrl = '/presence/preslist';

  getUsers(pageIndex = 1, pageSize = 10) {
    let params = new HttpParams()
      .append('page', `${pageIndex}`)
      .append('results', `${pageSize}`);
    return this.http.get(`${this.randomUserUrl}`, {
      params: params
    })
  }

  constructor(private http: HttpClient,
              private loginInfo: CheckLoginService) {
  }
}
@Component({
  selector: 'app-presence-list',
  providers: [ RandomUserService ],
  templateUrl: './presence-list.component.html',
  styleUrls: ['./presence-list.component.css']
})
export class PresenceListComponent implements OnInit {
  constructor(private _randomUser: RandomUserService) {
  }
  _dataSet = [];
  _current = 1;
  _pageSize = 10;
  _loading = true;
  _total = 1;
  ngOnInit() {
    this.refreshData();
  }
  refreshData(reset = false) {
    this._loading = true;
    this._randomUser.getUsers(this._current, this._pageSize, ).subscribe((data: any) => {
      this._loading = false;
      this._total = data.result.length;
      this._dataSet = data.result;
    })
  }
}
