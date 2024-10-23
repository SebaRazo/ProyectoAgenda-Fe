import { Component, OnInit } from '@angular/core';
import { Contact, ContactJsonPlaceholder } from 'src/app/core/interfaces/contacts';
import { UserService } from 'src/app/core/services/user.service';
import { contactsData } from 'src/assets/mockData/data';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contacts: ContactJsonPlaceholder[] = contactsData;


  contactsData:ContactJsonPlaceholder[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getData()
  }

  async getData(){
     this.contactsData = contactsData;
  }


  factura: any[] = [];
  total: number = 0;

  // Función para manejar la adición de productos desde el contacto seleccionado
  actualizarFactura(contact: Contact) {
    const index = this.factura.findIndex((item) => item.id === contact.id);

    if (index !== -1) {
      this.factura[index].cantidad = contact.cantidad;
      this.factura[index].subtotal = contact.cantidad * contact.precio;
    } else {
      this.factura.push({
        id: contact.id,
        name: contact.name,
        cantidad: contact.cantidad,
        subtotal: contact.precio,
      });
    }

    this.calcularTotal();
  }

  calcularTotal() {
    this.total = this.factura.reduce((acc, item) => acc + item.subtotal, 0);
  }

  cancelarPedido() {
    // Reiniciar factura y cantidades
    this.factura = [];
    this.total = 0;
    this.contactsData.forEach((contact) => (contact.cantidad = 0));
  }

  confirmarPedido() {
    alert('Pedido realizado');
    setTimeout(() => {
      this.factura = [];
      this.total = 0;
      this.contactsData.forEach((contact) => (contact.cantidad = 0));
    }, 4000); // 6 segundos
  }
}


