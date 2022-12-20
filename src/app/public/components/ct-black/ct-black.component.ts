import { Component, Input, OnInit } from '@angular/core';
import { ContactJsonPlaceholder } from 'src/app/core/interfaces/contacts';
import { ContactService } from 'src/app/core/services/contac.service';
import { ListaNegraComponent } from '../../pages/lista-negra/lista-negra.component';

@Component({
  selector:'app-ct-black',
  templateUrl: './ct-black.component.html',
  styleUrls: ['./ct-black.component.scss']
})
export class CtBlackComponent implements OnInit {
  emergente:boolean = false;
  contactsData:ContactJsonPlaceholder[] = [];

  constructor(private cs:ContactService, private ln :ListaNegraComponent) { }

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
    this.ln.deleteContacto(id) //ejecuta el metodo deleteContacto() del contact component
    setTimeout(()=>{
      this.ln.reload();
    },100);//recarga la ultima agenda, con un retraso de 50mls para asegurarnos q los metodos anteriores hayan terminado
  }


}
