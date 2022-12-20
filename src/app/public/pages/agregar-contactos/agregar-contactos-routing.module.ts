import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarContactosComponent } from './agregar-contactos.component';

const routes: Routes = [{
  path: '',
  component: AgregarContactosComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgregarContactosRoutingModule { }
