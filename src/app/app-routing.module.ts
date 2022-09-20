import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: ()=> import('./public/pages/login/login.module').then(m => m.LoginModule),
  
  },
  {
    path: 'contactos',
    loadChildren: ()=> import('./public/pages/contactos/contactos.module').then(m => m.ContactosModule)
  },
  {
    path: 'detalles-contactos',
    loadChildren: ()=> import('./public/pages/detalles-contactos/detalles-contactos.module').then(m => m.DetallesContactosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
