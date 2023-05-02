import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactService } from 'src/app/core/services/contac.service';
import { ListaNegraRoutingModule } from './lista-negra-routing.module';

import { FormsModule } from '@angular/forms';
import { ContactsRoutingModule } from '../contacts/contacts-routing.module';
import { PopUpComponent } from '../../components/pop-up/pop-up.component';
import { ContactCardComponent } from '../../components/contact-card/contact-card.component';
import { ContactsComponent } from '../contacts/contacts.component';
import { ContactsModule } from '../contacts/contacts.module';
import { AppModule } from 'src/app/app.module';

import { CtBlackComponent } from '../../components/ct-black/ct-black.component';


@NgModule({
  declarations: [


    
  ],
  imports: [
    CommonModule,
    ListaNegraRoutingModule,
    FormsModule,
    


 

  ]
})
export class ListaNegraModule { }
