import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactJsonPlaceholder } from 'src/app/core/interfaces/contacts';
import { AuthService } from 'src/app/core/services/auth.service';
import { ContactService } from 'src/app/core/services/contac.service';
@Component({
  selector: 'app-contacts-blocked',
  templateUrl: './contacts-blocked.component.html',
  styleUrls: ['./contacts-blocked.component.scss'],
})
export class ContactsBlockedComponent implements OnInit {
  emergente: boolean = false;
  contactsData: ContactJsonPlaceholder[] = [];

  constructor(
    private cs: ContactService,
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  async getData() {
    this.contactsData = await this.cs.getBlockedContacts();
  }

  logOut() {
    this.auth.resetSession();
  }
  reload() {
    this.getData();
  }
}
