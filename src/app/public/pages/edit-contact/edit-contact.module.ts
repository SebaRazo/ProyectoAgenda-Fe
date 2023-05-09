import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditContactRoutingModule } from './edit-contact-routing.module';
import { EditContactComponent } from './edit-contact.component';
import { FormsModule } from '@angular/forms';
import { ContactCardComponent } from '../../components/contact-card/contact-card.component';
import { PopUpComponent } from '../pop-up/pop-up.component';

@NgModule({
  declarations: [EditContactComponent],
  imports: [CommonModule, EditContactRoutingModule, FormsModule],
})
export class EditContactModule {}
