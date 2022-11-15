import { Component, Input, OnInit } from '@angular/core';
import { Contact, ContactJsonPlaceholder, defaultContact } from 'src/app/core/interfaces/contacts';
import { ContactService } from 'src/app/core/services/contac.service';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {
  emergente:boolean = false;
  contactsData:ContactJsonPlaceholder[] = [];

  constructor(private cs:ContactService,) { }

  @Input() contact:ContactJsonPlaceholder = {};
  

  ngOnInit(): void {
    this.getData()
  }

  async getData(){
    this.contactsData = await this.cs.getContacts();
  }

}
