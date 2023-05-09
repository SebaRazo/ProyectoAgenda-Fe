import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactsBlockedComponent } from './public/pages/contacts-blocked/contacts-blocked.component';
import { ContactsBlockedModule } from './public/pages/contacts-blocked/contacts-blocked.module';

@NgModule({
  declarations: [AppComponent, ContactsBlockedComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ContactsBlockedModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
