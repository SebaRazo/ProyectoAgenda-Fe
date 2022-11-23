import { Component, OnInit } from '@angular/core';
import { ContactJsonPlaceholder } from 'src/app/core/interfaces/contacts';
import { ContactService } from 'src/app/core/services/contac.service';
import { NgModule } from '@angular/core';
import {ContactCardComponent} from '../../components/contact-card/contact-card.component';
import { AuthService } from 'src/app/core/services/auth.service';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  emergente:boolean = false;
  contactsData:ContactJsonPlaceholder[] = [];

  constructor(private cs:ContactService, private auth:AuthService) { }

  ngOnInit(): void {
    this.getData()
  }
  
  async getData(){
    this.contactsData = await this.cs.getContacts();
  }

  logOut(){
    this.auth.resetSession();



}}
