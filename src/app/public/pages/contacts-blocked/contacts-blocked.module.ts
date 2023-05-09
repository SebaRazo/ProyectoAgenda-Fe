import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsBlockedRoutingModule } from './contacts-blocked-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { ContactsBlockedComponent } from './contacts-blocked.component';
const routes: Routes = [{ path: '', component: ContactsBlockedComponent }];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ContactsBlockedRoutingModule,
  ],
})
export class ContactsBlockedModule {}
