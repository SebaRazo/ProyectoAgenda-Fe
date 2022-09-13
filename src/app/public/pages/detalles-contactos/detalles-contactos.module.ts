import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetallesContactosRoutingModule } from './detalles-contactos-routing.module';
import { DetallesContactosComponent } from './detalles-contactos.component';


@NgModule({
  declarations: [
    DetallesContactosComponent
  ],
  imports: [
    CommonModule,
    DetallesContactosRoutingModule
  ]
})
export class DetallesContactosModule { }
