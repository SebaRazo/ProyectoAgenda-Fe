import { Component, Input, OnInit } from '@angular/core';
import { ContactJsonPlaceholder } from 'src/app/core/interfaces/contacts';
import { ContactService } from 'src/app/core/services/contac.service';


@Component({
  selector:'app-ct-black',
  templateUrl: './ct-black.component.html',
  styleUrls: ['./ct-black.component.scss']
})
export class CtBlackComponent implements OnInit {
  emergente:boolean = false;
  contactsData:ContactJsonPlaceholder[] = [];

  constructor(private cs:ContactService) { }

  @Input() contact:ContactJsonPlaceholder = {
    id:0,
    name:'',
    celularNumber:0,
    description:'',
    telephoneNumber:0,


  };
  

  ngOnInit(): void {
    
  }

  deleteContactBlack(id:number){ 
    console.log("contacto id: ",id," eliminado")
    
    setTimeout(()=>{
    ;
    },100);
  }
//crear una funcion que tome el id para creearlo nuevamente en api/contact

}
