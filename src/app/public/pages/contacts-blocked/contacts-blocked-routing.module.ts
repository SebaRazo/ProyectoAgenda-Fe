import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsBlockedComponent } from './contacts-blocked.component';

const routes: Routes = [
  {
    path: '',
    component: ContactsBlockedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactsBlockedRoutingModule {}
