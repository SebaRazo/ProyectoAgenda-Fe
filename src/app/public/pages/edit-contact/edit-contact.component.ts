import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact, ContactJsonPlaceholder } from 'src/app/core/interfaces/contacts';
import { ContactService } from 'src/app/core/services/contac.service';
import { ContactsComponent } from '../contacts/contacts.component';

@Component({
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {

  id: number | undefined

  constructor(private contactService: ContactService, private router: Router, private route: ActivatedRoute ) { }



  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params)
      this.id = params['id'];
      this.contactService.getContactDetails(this.id!).then(r => this.contact = r);
    })
  }



  contact: ContactJsonPlaceholder = {
    id: 0,
    name: "",
    celularNumber: 0,
    description: "",
    telephoneNumber: 0,
  }

  

  async updateContact(editForm : NgForm): Promise<void> {

    if (editForm.errors !== null) return
    const res  = await this.contactService.editContact(editForm.value)
    this.router.navigate(["/contacts"]);
  }

}