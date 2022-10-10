import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BottonLoginComponent } from './public/components/botton-login/botton-login.component';
import { BottonRegistroComponent } from './public/components/botton-registro/botton-registro.component';
import { BottonAgregarContactoComponent } from './public/components/botton-agregar-contacto/botton-agregar-contacto.component';
import { AgregarListaNegraComponent } from './public/components/agregar-lista-negra/agregar-lista-negra.component';

@NgModule({
  declarations: [
    AppComponent,
    BottonLoginComponent,
    BottonRegistroComponent,
    BottonAgregarContactoComponent,
    AgregarListaNegraComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

