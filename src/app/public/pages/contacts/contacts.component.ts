import { Component, OnInit } from '@angular/core';
import { ContactJsonPlaceholder } from 'src/app/core/interfaces/contacts';
import { AdminService } from 'src/app/core/services/admin.service';
import { ContactService } from 'src/app/core/services/contac.service';
import { NgModule } from '@angular/core';
import {ContactCardComponent} from '../../components/contact-card/contact-card.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  emergente:boolean = false;
  contactsData:ContactJsonPlaceholder[] = [];

  constructor(private cs:ContactService, private admin:AdminService) { }

  ngOnInit(): void {
    this.getData()
  }
  
  async getData(){
    this.contactsData = await this.cs.getContacts();
  }

  logOut(){
    this.admin.resetSession();

}}
