import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsBlockedRoutingModule } from './contacts-blocked-routing.module';
import { ContactsBlockedComponent } from './contacts-blocked.component';
import { CtBlackComponent } from '../../components/ct-black/ct-black.component';
import { BlockedCardComponent } from '../../components/blocked-card/blocked-card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ContactsBlockedComponent,
    CtBlackComponent,
    BlockedCardComponent,
  ],
  imports: [CommonModule, ContactsBlockedRoutingModule, FormsModule], // Incluye CommonModule aquí
})
export class ContactsBlockedModule {}
