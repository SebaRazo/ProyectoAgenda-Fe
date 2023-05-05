import { Injectable } from '@angular/core';
import { BACKEND_URL } from '../constants/backend';
import {
  Contact,
  ContactJsonPlaceholder,
  CallInfoDto,
} from '../interfaces/contacts';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private auth: AuthService) {}

  async getContactDetails(id: number): Promise<Contact> {
    const res = await fetch(BACKEND_URL + '/api/Contact/' + id, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${this.auth.getSession().token!}`,
      },
    });
    const contact = await res.json();
    console.log('Contact in getContactDetails:', contact); // Agrega este registro de consola
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    const data = await fetch(BACKEND_URL + '/api/Contact/all', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${this.auth.getSession().token!}`, ////******************* */
      },
    });
    return await data.json();
  }

  async getBlockedContacts(): Promise<Contact[]> {
    const data = await fetch(BACKEND_URL + '/api/Contact/blocked', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${this.auth.getSession().token!}`,
      },
    });
    return await data.json();
  }

  async getCallInfoByContactId(contactId: number): Promise<CallInfoDto> {
    const res = await fetch(BACKEND_URL + '/api/Contact/getcall/' + contactId, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${this.auth.getSession().token!}`,
      },
    });
    return await res.json();
  }

  // src/app/core/services/contact.service.ts

  async editContact(id: number, contact: Partial<Contact>): Promise<Contact> {
    console.log('Contact in editContact:', contact);
    const res = await fetch(BACKEND_URL + '/api/Contact/' + id, {
      method: 'PUT',
      body: JSON.stringify(contact),
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${this.auth.getSession().token!}`,
      },
    });
    return await res.json();
  }

  async addContact(
    contact: ContactJsonPlaceholder
  ): Promise<ContactJsonPlaceholder> {
    //: Promise<ContactJsonPlaceholder>
    console.log(contact);
    const res = await fetch(BACKEND_URL + '/api/Contact', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${this.auth.getSession().token!}`,
      },
      body: JSON.stringify(contact),
    });
    return await res.json();
    //console.log(res.json())
  }

  async deleteContact(id: number): Promise<boolean> {
    const res = await fetch(BACKEND_URL + '/api/Contact/' + id, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${this.auth.getSession().token!}`,
      },
    });
    return res.ok;
  }

  async blockContact(id: number): Promise<void> {
    const res = await fetch(BACKEND_URL + '/api/Contact/block/' + id, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${this.auth.getSession().token!}`,
      },
    });
    if (!res.ok) {
      // Manejar el error
    }
  }

  async unblockContact(id: number): Promise<boolean> {
    const res = await fetch(BACKEND_URL + '/api/Contact/unblock/' + id, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${this.auth.getSession().token!}`,
      },
    });
    return res.ok;
  }
}
