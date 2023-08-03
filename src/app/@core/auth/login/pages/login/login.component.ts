import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private router: Router) {
    localStorage.removeItem('register');
  }
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
  login() {
    let userInfo = this.loginForm.value;
    if (userInfo.email == 'admin' && userInfo.password == 'admin') {
      localStorage.setItem('auth', 'authorized');
      localStorage.setItem('role', 'admin');
      alert('admin');
    } else if (userInfo.email == 'user' && userInfo.password == 'user') {
      localStorage.setItem('auth', 'authorized');
      localStorage.setItem('role', 'user');
      alert('user');
    } else {
      alert('error');
    }
  }
}
