import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';

import { HomeComponent } from './home/home.component';
import { LoginaComponent } from './logina/logina.component';
import { LogincComponent } from './loginc/loginc.component';
import { LoginsComponent } from './logins/logins.component';
import { SolicitarComponent } from './solicitar/solicitar.component';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'logina', component: LoginaComponent },
  { path: 'loginc', component: LogincComponent },
  { path: 'logins', component: LoginsComponent },
  { path: 'solicitar', component: SolicitarComponent},
  { path: 'formulario', component: FormularioComponent}
];

export const routing: ModuleWithProviders<any> =
  RouterModule.forRoot(APP_ROUTES);
