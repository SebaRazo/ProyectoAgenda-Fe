import { Component, OnInit } from '@angular/core';
import { Contact, ContactJsonPlaceholder } from 'src/app/core/interfaces/contacts';
import { ContactService } from 'src/app/core/services/contac.service';
import { NgModule } from '@angular/core';
import {ContactCardComponent} from '../../components/contact-card/contact-card.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  emergente:boolean = false;
  contactsData:ContactJsonPlaceholder[] = [];

 

  constructor(private cs:ContactService, private router:Router, private auth: AuthService) { }

  idContactoForEdit: number = 0
  ngOnInit(): void {this.getData();
  }

  async getData(){
    this.contactsData = await this.cs.getContacts();
  }

  logOut(){
    this.auth.resetSession();
  }


  async deleteContacto(id: number): Promise<void>{ //se ejecuta desde la contact card
    await this.cs.deleteContact(id);
  }




  reload(){
    this.getData()
  }
}
