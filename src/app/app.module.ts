import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './core/shared/shared.module';
import { ContactCardComponent } from './public/components/contact-card/contact-card.component';
import { ContactsModule } from './public/pages/contacts/contacts.module';



@NgModule({
  declarations: [
    
    AppComponent,
  ],
  imports: [
    
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule  
  ],

  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

