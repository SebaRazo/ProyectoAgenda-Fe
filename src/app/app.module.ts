import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { EditContactComponent } from './public/pages/edit-contact/edit-contact.component';
import { EditContactModule } from './public/pages/edit-contact/edit-contact.module';
import { HttpClientModule } from '@angular/common/http';
import { AgregarContactosModule } from './public/pages/agregar-contactos/agregar-contactos.module';
import { PopUpComponent } from './public/components/pop-up/pop-up.component';
import { ContactCardComponent } from './public/components/contact-card/contact-card.component';






@NgModule({
  declarations: [
    
    AppComponent,
         
   

    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

