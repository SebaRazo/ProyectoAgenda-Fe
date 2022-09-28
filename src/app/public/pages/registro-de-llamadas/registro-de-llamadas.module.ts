import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroDeLlamadasRoutingModule } from './registro-de-llamadas-routing.module';
import { RegistroDeLlamadasComponent } from './registro-de-llamadas.component';


@NgModule({
  declarations: [
    RegistroDeLlamadasComponent
  ],
  imports: [
    CommonModule,
    RegistroDeLlamadasRoutingModule
  ]
})
export class RegistroDeLlamadasModule { }
