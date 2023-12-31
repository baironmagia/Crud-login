import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ShareModule } from '../share/share.module';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ReportesComponent } from './reportes/reportes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';


@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    UsuariosComponent,
    ReportesComponent,
    NavbarComponent,
    CrearUsuarioComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ShareModule
  ]
})
export class DashboardModule { }
