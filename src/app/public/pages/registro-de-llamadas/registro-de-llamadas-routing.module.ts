import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroDeLlamadasComponent } from './registro-de-llamadas.component';

const routes: Routes = [{ path: '', component: RegistroDeLlamadasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistroDeLlamadasRoutingModule { }
