import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  registrarUsuario: FormGroup;

  constructor(private fb:FormBuilder) { 
    this.registrarUsuario = this.fb.group({
      Name: ['',Validators.required],
      UserName: ['',Validators.required],
      Password: ['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  registrar(){
    console.log(this.registrarUsuario);
  }

}
