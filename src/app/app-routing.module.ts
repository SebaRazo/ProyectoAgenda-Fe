import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactsComponent } from './public/pages/contacts/contacts.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: ()=> import('./public/pages/login/login.module').then(m => m.LoginModule),
  },

  {
    path: 'contacts',
    loadChildren: ()=> import('./public/pages/contacts/contacts.module').then(m => m.ContactsModule),    
  },

  {
    path: 'edit_contacts',
    loadChildren: ()=> import('./public/pages/edit-contact/edit-contact.module').then(m => m.EditContactModule)
  },

  {
    path: 'agregarContactos',
    loadChildren: ()=> import('./public/pages/agregar-contactos/agregar-contactos.module').then(m => m.AgregarContactosModule)
  },

  { path: 'registro', loadChildren: () => import('./public/pages/registro/registro.module').then(m => m.RegistroModule) 
  },

  { path: 'lista-negra', loadChildren: () => import('./public/pages/lista-negra/lista-negra.module').then(m => m.ListaNegraModule) 
  },

  { path: 'registro-de-llamadas', loadChildren: () => import('./public/pages/registro-de-llamadas/registro-de-llamadas.module').then(m => m.RegistroDeLlamadasModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
