import { Component, OnInit,} from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { iRegisterRequest } from 'src/app/core/interfaces/auth';
import { IUser } from 'src/app/core/interfaces/user.interface';
import { AuthService } from 'src/app/core/services/auth.service';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {

  constructor(private auth:AuthService, private router:Router) { }

  //Hecho usando NgModel
  user:iRegisterRequest = {
    name:"",
    lastName:"",
    password:"",
    email:"",
    userName:"",
    
  };

  async register(registerForm: NgForm){
    console.log(registerForm.value);
    const res = await this.auth.addUser(registerForm.value);
    this.router.navigate(['/']);

  }




}