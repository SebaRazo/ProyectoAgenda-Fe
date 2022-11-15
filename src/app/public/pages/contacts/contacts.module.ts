import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { ContactCardComponent } from '../../components/contact-card/contact-card.component';
import { PopUpComponent } from '../../components/pop-up/pop-up.component';


@NgModule({
  declarations: [
    
    ContactsComponent,
    
    PopUpComponent,
    ContactCardComponent

  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
  
  ],
})
export class ContactsModule { }
