import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  errorMsg = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    // Login Validation
    if (this.username.trim().length === 0) {
      this.errorMsg = 'Username is Required';
    } else if (this.password.trim().length === 0) {
      this.errorMsg = 'Password is Required';
    } else {
      this.errorMsg = '';
      // Inject Auth Service if no validation errors occur
      let res = this.authService.login(this.username, this.password);
      if (res === 200) {
        //Route the user to Homepage
        this.router.navigate(['home']);
      }
      if (res === 403) {
        this.errorMsg = 'Invalid Credentials';
      }
    }
  }
}
