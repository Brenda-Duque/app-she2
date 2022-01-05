import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { LoginaComponent } from './logina/logina.component';
import { LogincComponent } from './loginc/loginc.component';
import { LoginsComponent } from './logins/logins.component';
import { SolicitarComponent } from './solicitar/solicitar.component';
import { FormularioComponent } from './formulario/formulario.component';

@NgModule({
  imports: [BrowserModule, FormsModule, routing],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginaComponent,
    LogincComponent,
    LoginsComponent,
    SolicitarComponent,
    FormularioComponent,
    HelloComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
