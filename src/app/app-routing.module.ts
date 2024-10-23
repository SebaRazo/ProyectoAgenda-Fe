import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedUserGuard } from './core/guards/logged-user.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: ()=> import('./public/pages/contacts/contacts.module').then(m => m.ContactsModule),
  
  },
  {
    path: 'menu',
    loadChildren: ()=> import('./public/pages/contacts/contacts.module').then(m => m.ContactsModule),
    canActivate: [LoggedUserGuard]
  },
  {

    path: 'zonaEntrega',
    loadChildren: ()=> import('./public/pages/agregar-contactos/agregar-contactos.module').then(m => m.AgregarContactosModule)
  },
  { path: 'registro', loadChildren: () => import('./public/pages/registro/registro.module').then(m => m.RegistroModule) },
  { path: 'lista-negra', loadChildren: () => import('./public/pages/lista-negra/lista-negra.module').then(m => m.ListaNegraModule) },
  { path: 'registro-de-llamadas', loadChildren: () => import('./public/pages/registro-de-llamadas/registro-de-llamadas.module').then(m => m.RegistroDeLlamadasModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }