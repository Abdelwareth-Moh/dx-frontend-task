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
    //     this.adminService.login(this.loginForm.value).subscribe((data:any)=>{
    //       localStorage.setItem('token',data.token)
    //       localStorage.setItem('role',data.role[0].name)
    //       if(localStorage.getItem('role')=='Admin')
    //     {
    //       this.router.navigate(['/admin-dashboard/products'])
    //     }
    //     else
    //     {      this.router.navigate(['/admin-dashboard'])
    // }
    //     },
    //     (error:any)=>{
    //     }
    //     )
  }
}
