import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactJsonPlaceholder } from 'src/app/core/interfaces/contacts';
import { ContactService } from 'src/app/core/services/contac.service';

@Component({
  selector: 'app-agregar-contactos',
  templateUrl: './agregar-contactos.component.html',
  styleUrls: ['./agregar-contactos.component.scss'],
})
export class AgregarContactosComponent implements OnInit {
  constructor(
    private cs: ContactService,
    private router: Router,
    private ar: ActivatedRoute
  ) {} //private Cc: ContactCardComponent

  contactsData: ContactJsonPlaceholder = {
    name: '',
    celularNumber: null,
    description: '',
    telephoneNumber: null,
  };
  ngOnInit(): void {}

  async AgregContactos(createForm: NgForm) {
    console.log(createForm.value);
    const res = await this.cs.addContact(createForm.value);
    console.log(res);
    this.router.navigate(['/contacts']);
  }
}
