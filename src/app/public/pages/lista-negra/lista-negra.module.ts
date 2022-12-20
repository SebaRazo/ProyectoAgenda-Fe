import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactService } from 'src/app/core/services/contac.service';
import { ListaNegraRoutingModule } from './lista-negra-routing.module';
import { ListaNegraComponent } from './lista-negra.component';
import { FormsModule } from '@angular/forms';
import { ContactsRoutingModule } from '../contacts/contacts-routing.module';
import { PopUpComponent } from '../../components/pop-up/pop-up.component';
import { ContactCardComponent } from '../../components/contact-card/contact-card.component';
import { ContactsComponent } from '../contacts/contacts.component';
import { ContactsModule } from '../contacts/contacts.module';
import { AppModule } from 'src/app/app.module';
import { EmrBlackComponent } from '../../components/emr-Black/emr-black.component';
import { CtBlackComponent } from '../../components/ct-black/ct-black.component';


@NgModule({
  declarations: [
    ListaNegraComponent,
    CtBlackComponent,
    EmrBlackComponent,
    
  ],
  imports: [
    CommonModule,
    ListaNegraRoutingModule,
    FormsModule,
    


 

  ]
})
export class ListaNegraModule { }
