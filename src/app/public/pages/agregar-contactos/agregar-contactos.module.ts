import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgregarContactosRoutingModule } from './agregar-contactos-routing.module';
import { AgregarContactosComponent } from './agregar-contactos.component';


@NgModule({
  declarations: [
    AgregarContactosComponent
  ],
  imports: [
    CommonModule,
    AgregarContactosRoutingModule
  ]
})
export class AgregarContactosModule { }
