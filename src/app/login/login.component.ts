import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  errorMsg = '';

  constructor() {}

  ngOnInit(): void {}

  login() {
    if (this.username.trim().length === 0) {
      this.errorMsg = "Username is Required";
    } else if (this.password.trim().length === 0) {
      this.errorMsg = "Password is Required";
    } else {
      this.errorMsg = "";
    }
  }
}
