import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaNegraComponent } from './lista-negra.component';

const routes: Routes = [{ path: '', component: ListaNegraComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaNegraRoutingModule { }
