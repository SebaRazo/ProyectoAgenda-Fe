import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactJsonPlaceholder } from 'src/app/core/interfaces/contacts';
import { AuthService } from 'src/app/core/services/auth.service';
import { ContactService } from 'src/app/core/services/contac.service';
import { ContactsComponent } from '../../pages/contacts/contacts.component';

@Component({
  selector:'app-emr-black',
  templateUrl: './emr-black.component.html',
  styleUrls: ['./emr-black.component.scss']
})
export class EmrBlackComponent implements OnInit {
  emergente:boolean = false;
  constructor( private cs:ContactService, private cc:ContactsComponent, private auth:AuthService, private router:Router) { }

  idContactoForEdit: number = 0

  abrirContactEdit: number = 0

  @Input() contact:ContactJsonPlaceholder = {
    id:0,
    name:'',
    celularNumber:0,
    description:'',
    telephoneNumber:0,
  };


  ngOnInit(): void {
  }


  deleteContacto(id:number){  //metodo llamado desde el boton borrar del html(recibe el id del contacto )
    console.log("contacto id: ",id," eliminado")
    this.cc.deleteContacto(id) //ejecuta el metodo deleteContacto() del contact component
    setTimeout(()=>{
      this.cc.reload();
    },100);//recarga la ultima agenda, con un retraso de 50mls para asegurarnos q los metodos anteriores hayan terminado
  }


  
}
