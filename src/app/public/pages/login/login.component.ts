import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { iAuthRequest } from 'src/app/core/interfaces/auth';
import { AuthService } from 'src/app/core/services/auth.service';
import { AppModule } from 'src/app/app.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private auth:AuthService, private router:Router) { }


  authData:iAuthRequest = {
    userName : "",
    password : ""
  };


  async login(form:NgForm){
    console.log(form.value);
    const token = await this.auth.login(form.value);
    if(token) this.router.navigate(['contacts']);
  }

}