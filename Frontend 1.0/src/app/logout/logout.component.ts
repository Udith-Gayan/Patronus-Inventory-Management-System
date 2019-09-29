import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginLogoutServService } from '../service/login-logout-serv.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private authentocationService: LoginLogoutServService,
    private router: Router) {

  }

  ngOnInit() {
    this.authentocationService.logOut();
    this.router.navigate(['home']);
  }

}
