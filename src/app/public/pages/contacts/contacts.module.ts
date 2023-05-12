import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { ContactCardComponent } from '../../components/contact-card/contact-card.component';
import { PopUpComponent } from '../../components/pop-up/pop-up.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContactsComponent, PopUpComponent, ContactCardComponent],
  imports: [CommonModule, ContactsRoutingModule, FormsModule],
})
export class ContactsModule {}
