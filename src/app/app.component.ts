import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CheckInitService} from "./shared/check-init.service";
import {CheckLoginService} from "./shared/check-login.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // userName: string = '';

  ngOnInit(): void {
    this.http.get('/checksession')
      .subscribe(res => {
        if(res['result']){
          this.router.navigate([{ outlets: { identity: ['logined']}}],);
          // if(this.route.url. === '/')
        
            this.router.navigate(['/login/work'])
           
            
          
          
        }else
          this.router.navigate([{ outlets: { identity: ['no-login'] } }],);
      })

  }//{ skipLocationChange: true }

  isCollapsed: boolean = true;
  theme: boolean = true;
  get isInit(): boolean {
      return this.checkInit.getState();
     }
  get userName(): string{
    return this.checkLogin.userName;
  }
  constructor(private router: Router,
              private checkInit: CheckInitService,
              private checkLogin: CheckLoginService,
              private http: HttpClient,
            private route: ActivatedRoute){}
}
