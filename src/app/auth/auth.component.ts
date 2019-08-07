import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  authType = '';
  title = '';
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
      this.route.url.subscribe(data => {
      // 取得登入或註冊
      this.authType = data[data.length - 1].path;
  });
  }
}
