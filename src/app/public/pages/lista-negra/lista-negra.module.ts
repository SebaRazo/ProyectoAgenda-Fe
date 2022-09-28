import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaNegraRoutingModule } from './lista-negra-routing.module';
import { ListaNegraComponent } from './lista-negra.component';


@NgModule({
  declarations: [
    ListaNegraComponent
  ],
  imports: [
    CommonModule,
    ListaNegraRoutingModule
  ]
})
export class ListaNegraModule { }
