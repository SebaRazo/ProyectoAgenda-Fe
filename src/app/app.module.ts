import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactsBlockedComponent } from './public/pages/contacts-blocked/contacts-blocked.component';
import { ContactsBlockedModule } from './public/pages/contacts-blocked/contacts-blocked.module';
import { BlockedCardComponent } from './public/components/blocked-card/blocked-card.component';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
