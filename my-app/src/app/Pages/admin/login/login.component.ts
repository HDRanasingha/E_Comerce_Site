import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj = {
    email: '',
    password: ''
  };

  constructor(private router: Router) {}

  onLogin() {
    if (this.loginObj.email === 'admin@gmail.com' && this.loginObj.password === '2001') {
      this.router.navigateByUrl('/products');
    } else {
      alert('Wrong Credentials');
    }
  }
}
