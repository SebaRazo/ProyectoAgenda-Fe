import { Injectable } from '@angular/core';
import { ContactJsonPlaceholder } from '../interfaces/contacts';


@Injectable({
  providedIn: 'root',
})
export class ContactService {
  // Lista ficticia de contactos
  private contacts: ContactJsonPlaceholder[] = [
    {
      id: 1,
      name: 'Producto A',
      descripcion: 'Descripción del producto A',
      precio: 100.5,
      cantidad: 10,
    },
    {
      id: 2,
      name: 'Producto B',
      descripcion: 'Descripción del producto B',
      precio: 200,
      cantidad: 5,
    },
    {
      id: 3,
      name: 'Producto C',
      descripcion: 'Descripción del producto C',
      precio: 150,
      cantidad: 8,
    }
  ];



  // Obtiene los detalles de un contacto/producto por su ID
  async getContactDetails(id: number): Promise<ContactJsonPlaceholder> {
    const contact = this.contacts.find((contact) => contact.id === id);
    return contact ? contact : {} as ContactJsonPlaceholder;
  }

  // Obtiene todos los contactos/productos
  async getContacts(): Promise<ContactJsonPlaceholder[]> {
    return this.contacts;
  }

  // Edita un contacto/producto existente
  async editContact(contact: ContactJsonPlaceholder): Promise<ContactJsonPlaceholder> {
    const index = this.contacts.findIndex(c => c.id === contact.id);
    if (index !== -1) {
      this.contacts[index] = contact; // Actualiza el contacto en la lista
      console.log('Producto editado:', contact);
    } else {
      console.error('Producto no encontrado');
    }
    return contact;
  }

  // Añade un nuevo contacto/producto
  async addContact(contact: ContactJsonPlaceholder): Promise<ContactJsonPlaceholder> {
    // Genera un ID único para el nuevo contacto/producto
    contact.id = this.contacts.length > 0 ? Math.max(...this.contacts.map(c => c.id)) + 1 : 1;
    this.contacts.push(contact); // Añade el contacto/producto a la lista
    console.log('Nuevo producto agregado:', contact);
    return contact;
  }

  // Elimina un contacto/producto por ID
  async deleteContact(id: number): Promise<boolean> {
    const index = this.contacts.findIndex(c => c.id === id);
    if (index !== -1) {
      this.contacts.splice(index, 1); // Elimina el contacto/producto de la lista
      console.log('Producto eliminado con ID:', id);
      return true;
    } else {
      console.error('Producto no encontrado para eliminar');
      return false;
    }
  }
}