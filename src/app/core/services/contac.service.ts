import { Injectable } from '@angular/core';
import { BACKEND_URL } from '../constants/backend';
import { Contact, ContactJsonPlaceholder } from '../interfaces/contacts';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private auth:AuthService) {}


  async getContactDetails(id: number): Promise<Contact> {
    const res = await fetch(BACKEND_URL+'/api/Contact/'+ id,{
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Authorization' :  `Bearer ${this.auth.getSession().token!}` ////******************* */
      },
    });
    return await res.json();
  }

  async getContacts(): Promise<ContactJsonPlaceholder[]> {
    const data = await fetch(BACKEND_URL+'/api/Contact',{
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Authorization' :  `Bearer ${this.auth.getSession().token!}` ////******************* */
      },
    });
    return await data.json();
  }

  async editContact(contact:Contact) {
    const res = await fetch(BACKEND_URL+'/api/Contact/' +contact.id, {
      method: 'PUT',
      body: JSON.stringify(contact),
      headers: {
        'Content-type': 'application/json',
        'Authorization' :  `Bearer ${this.auth.getSession().token!}`
      },
      
    });
    return res.ok;
  }

  async addContact(contact: ContactJsonPlaceholder) : Promise<ContactJsonPlaceholder>{ //: Promise<ContactJsonPlaceholder>
    console.log(contact);
    const res = await fetch(BACKEND_URL+'/api/Contact', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Authorization' :  `Bearer ${this.auth.getSession().token!}`
      },
      body: JSON.stringify(contact)
    });
    return await res.json();
    //console.log(res.json())
  }



  async deleteContact(id:number):Promise<boolean>{
    const res = await fetch(BACKEND_URL+'/api/Contact/'+id, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        'Authorization' :  `Bearer ${this.auth.getSession().token!}`
      },
    });
    return res.ok;
  }


  async addContactblack(id: Contact, name:Contact, celularNumber: Contact, 
    description: Contact, telephoneNumber: Contact) : Promise<ContactJsonPlaceholder>{ //: Promise<ContactJsonPlaceholder>
    console.log(id, name, celularNumber, description, telephoneNumber);
    const res = await fetch(BACKEND_URL+'/api/Contact', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Authorization' :  `Bearer ${this.auth.getSession().token!}`
      },
      body: JSON.stringify(id)
    });
    return await res.json();
    //console.log(res.json())
  }
}