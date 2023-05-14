import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  CallInfoDto,
  ContactJsonPlaceholder,
} from 'src/app/core/interfaces/contacts';
import { ContactService } from 'src/app/core/services/contac.service';
import { ContactsBlockedComponent } from '../../pages/contacts-blocked/contacts-blocked.component';

@Component({
  selector: 'app-ct-black',
  templateUrl: './ct-black.component.html',
  styleUrls: ['./ct-black.component.scss'],
})
export class CtBlackComponent implements OnInit {
  @Input() contact: ContactJsonPlaceholder = {
    id: 0,
    name: '',
    celularNumber: 0,
    description: '',
    telephoneNumber: 0,
  };
  @Output() close = new EventEmitter<void>();
  callInfo: CallInfoDto | null = null;

  constructor(
    private cs: ContactService,
    private cb: ContactsBlockedComponent
  ) {}
  ngOnInit(): void {
    this.cs.getCallInfoByContactId(this.contact.id).then((callInfo) => {
      this.callInfo = callInfo;
    });
  }

  unblockContact(): void {
    this.cs
      .unblockContact(this.contact.id)
      .then(() => {
        console.log('Contacto desbloqueado con éxito');
        this.close.emit();
      })
      .catch((error) => {
        console.log('Error al desbloquear el contacto:', error);
      });
    setTimeout(() => {
      this.cb.reload();
    }, 100);
  }
}
