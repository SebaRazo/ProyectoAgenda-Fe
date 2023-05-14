import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactJsonPlaceholder } from 'src/app/core/interfaces/contacts';
import { ContactService } from 'src/app/core/services/contac.service';

@Component({
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss'],
})
export class EditContactComponent implements OnInit {
  id: number;

  constructor(
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
      this.contactService
        .getContactDetails(this.id)
        .then((r) => (this.contact = r));
    });
  }

  contact: ContactJsonPlaceholder = {
    id: 0,
    name: '',
    celularNumber: null,
    description: '',
    telephoneNumber: null,
  };

  // src/app/public/pages/edit-contact/edit-contact.component.ts

  async updateContact(editForm: NgForm): Promise<void> {
    if (editForm.errors !== null) return;
    if (this.id === undefined) return;
    const res = await this.contactService.editContact(this.id, editForm.value);
    this.router.navigate(['/contacts']);
  }
}
