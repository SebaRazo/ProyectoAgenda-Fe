import { Component, Input, OnInit } from '@angular/core';
import { ContactService } from 'src/app/core/services/contac.service';
import { ActivatedRoute } from '@angular/router';
import { ContactJsonPlaceholder } from 'src/app/core/interfaces/contacts';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { ContactsComponent } from '../../pages/contacts/contacts.component';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss'],
})
export class PopUpComponent implements OnInit {
  @Input() contactId: number;

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

  deleteContacto(): void {
    this.cs
      .deleteContact(this.contact.id)
      .then(() => {
        console.log('Contacto eliminado con éxito');
      })
      .catch((error) => {
        console.log('Error al eliminar el contacto:', error);
      });
    setTimeout(() => {
      this.cc.reload();
    }, 110);
  }

  editContac(id: number) {
    this.router.navigate(['/edit_contact', id]);
  }
  navigateToEditContact(id: number): void {
    this.router.navigate(['/edit-contact', id]);
  }

  blockContact(): void {
    this.cs
      .blockContact(this.contact.id)
      .then(() => {
        console.log('Contacto bloqueado con éxito');
      })
      .catch((error) => {
        console.log('Error al bloquear el contacto:', error);
      });
    setTimeout(() => {
      this.cc.reload();
    }, 100);
  }
}
