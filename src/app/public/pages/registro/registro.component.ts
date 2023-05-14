import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { iRegisterRequest } from 'src/app/core/interfaces/auth';

import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent {
  constructor(private auth: AuthService, private router: Router) {}

  user: iRegisterRequest = {
    name: '',
    lastName: '',
    password: '',
    email: '',
    userName: '',
  };

  async register(registerForm: NgForm) {
    console.log(registerForm.value);
    const res = await this.auth.addUser(registerForm.value);
    this.router.navigate(['/']);
  }
}
