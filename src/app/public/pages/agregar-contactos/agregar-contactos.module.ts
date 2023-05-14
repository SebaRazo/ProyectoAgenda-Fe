import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgregarContactosRoutingModule } from './agregar-contactos-routing.module';
import { AgregarContactosComponent } from './agregar-contactos.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AgregarContactosComponent],
  imports: [CommonModule, FormsModule, AgregarContactosRoutingModule],
})
export class AgregarContactosModule {}
