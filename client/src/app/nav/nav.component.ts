import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from '../_services/account.service';
import { User } from './../_models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  navbarCollapsed = true;
  model: any = {};

  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
    this.navbarCollapsed = true;
  }

  login() {
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error + 'err');
    });
  }

  logout() {
    this.accountService.logout();
  }
}
