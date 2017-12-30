import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-logined-detail',
  templateUrl: './logined-detail.component.html',
  styleUrls: ['./logined-detail.component.css']
})
export class LoginedDetailComponent implements OnInit {

  constructor(private http: HttpClient,
  private router: Router) { }

  ngOnInit() {
  }
  logout(){
    this.http.get('/logout')
    .subscribe(res => {
      this.router.navigate([{ outlets: { identity: ['no-login'] } }],);
      this.router.navigate(['login'] );
    })
  }

}
