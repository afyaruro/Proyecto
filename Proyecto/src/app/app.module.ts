import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CrearCuentaPacienteComponent } from './crear-cuenta-paciente/crear-cuenta-paciente.component';
import { AdministradorHomeComponent } from './administrador-home/administrador-home.component';
import { AdministradorNuevoEmpleadoComponent } from './administrador-nuevo-empleado/administrador-nuevo-empleado.component';
import { AdministradorNueevoAdministradorComponent } from './administrador-nueevo-administrador/administrador-nueevo-administrador.component';

import { MenuAdministradorComponent } from './menu-administrador/menu-administrador.component';
import { ConsultaEmpleadoComponent } from './consulta-empleado/consulta-empleado.component';
import { ConsultaPacienteComponent } from './consulta-paciente/consulta-paciente.component';
import { PagosEmpleadosComponent } from './pagos-empleados/pagos-empleados.component';
import { ActualizarEmpleadoComponent } from './actualizar-empleado/actualizar-empleado.component';
import { MenuEmpleadoComponent } from './menu-empleado/menu-empleado.component';
import { CitasAgendadasComponent } from './citas-agendadas/citas-agendadas.component';
import { DiagnosticoapacienteComponent } from './diagnosticoapaciente/diagnosticoapaciente.component';
import { RegistroPagosComponent } from './registro-pagos/registro-pagos.component';
import { HomeEmpleadoComponent } from './home-empleado/home-empleado.component';
import { PacienteHomeComponent } from './paciente-home/paciente-home.component';
import { PacienteCitaComponent } from './paciente-cita/paciente-cita.component';
import { PacienteDiagnosticoComponent } from './paciente-diagnostico/paciente-diagnostico.component';
import { PacientePagoComponent } from './paciente-pago/paciente-pago.component';
import { MenuPacienteComponent } from './menu-paciente/menu-paciente.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CrearCuentaPacienteComponent,
    AdministradorHomeComponent,
    AdministradorNuevoEmpleadoComponent,
    AdministradorNueevoAdministradorComponent,
    MenuAdministradorComponent,
    ConsultaEmpleadoComponent,
    ConsultaPacienteComponent,
    PagosEmpleadosComponent,
    ActualizarEmpleadoComponent,
    MenuEmpleadoComponent,
    CitasAgendadasComponent,
    DiagnosticoapacienteComponent,
    RegistroPagosComponent,
    HomeEmpleadoComponent,
    PacienteHomeComponent,
    PacienteCitaComponent,
    PacienteDiagnosticoComponent,
    PacientePagoComponent,
    MenuPacienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
