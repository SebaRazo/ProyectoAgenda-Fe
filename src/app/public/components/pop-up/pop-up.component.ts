import { Component, Inject, Input, OnInit } from '@angular/core';
import { ContactService } from 'src/app/core/services/contac.service';
import { ActivatedRoute } from '@angular/router';
import {
  Contact,
  ContactJsonPlaceholder,
} from 'src/app/core/interfaces/contacts';
import { ContactCardComponent } from 'src/app/public/components/contact-card/contact-card.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { ContactsComponent } from '../../pages/contacts/contacts.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss'],
})
export class PopUpComponent implements OnInit {
  emergente: boolean = false;

  constructor(
    private cs: ContactService,
    private cc: ContactsComponent,
    private route: ActivatedRoute,
    private auth: AuthService,
    private router: Router
  ) {}

  @Input() contact: ContactJsonPlaceholder = {
    id: 0,
    name: '',
    celularNumber: 0,
    description: '',
    telephoneNumber: 0,
  };

  ngOnInit(): void {}

  deleteContacto(id: number) {
    console.log('contacto id: ', id, ' eliminado');
    this.cc.deleteContacto(id);
    setTimeout(() => {
      this.cc.reload();
    }, 100);
  }

  editContac(id: number) {
    this.router.navigate(['/edit_contact', id]);
  }
  navigateToEditContact(id: number): void {
    this.router.navigate(['/edit-contact', id]);
  }
}
