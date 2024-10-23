import { Component, Output, Input, OnInit,EventEmitter  } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Contact, ContactJsonPlaceholder, defaultContact  } from 'src/app/core/interfaces/contacts';
import { ContactService } from 'src/app/core/services/contac.service';
@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {
  //emergente:boolean = false;
  //contactsData:ContactJsonPlaceholder[] = [];
  //constructor(private cs:ContactService,) { }

 // @Input() contact:ContactJsonPlaceholder = {
   // id: 0, // Proporciona un valor por defecto
    //name: 'Sin nombre', // Nombre por defecto
    //cantidad: 0, // Cantidad por defecto
    //precio:0,
   //};

   @Input() contact: Contact ={   id: 0, // Proporciona un valor por defecto
    name: 'Sin nombre', // Nombre por defecto
    cantidad: 0, // Cantidad por defecto
    precio:0,
   };
   @Output() productoSeleccionado = new EventEmitter<Contact>();

   agregarProducto() {
    this.contact.cantidad += 1;
    // Emitimos el contacto actualizado al componente padre
    this.productoSeleccionado.emit(this.contact);
  }



  ngOnInit(): void {
    //this.getData()
  }

  //async getData(){
  //  this.contactsData = await this.cs.getContacts();
//
  //}

  

}
