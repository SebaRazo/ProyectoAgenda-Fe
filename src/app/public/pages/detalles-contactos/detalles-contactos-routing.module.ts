import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesContactosComponent } from './detalles-contactos.component';

const routes: Routes = [
  {
    path: "",
    component: DetallesContactosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetallesContactosRoutingModule { }
