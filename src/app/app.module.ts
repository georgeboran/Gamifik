import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { VentanaFormularioComponent } from './ventana-formulario/ventana-formulario.component';
import { LoginComponent } from './loguear/login/login.component';
import { RegisterComponent } from './registrar/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    VentanaFormularioComponent,
    LoginComponent,
    RegisterComponent

  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent],
})
export class AppModule {}
