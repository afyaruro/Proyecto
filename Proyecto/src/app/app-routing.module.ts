import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearCuentaPacienteComponent } from './crear-cuenta-paciente/crear-cuenta-paciente.component';
import {AdministradorHomeComponent } from './administrador-home/administrador-home.component'
import {AdministradorNuevoEmpleadoComponent} from './administrador-nuevo-empleado/administrador-nuevo-empleado.component'
import {AdministradorNueevoAdministradorComponent} from './administrador-nueevo-administrador/administrador-nueevo-administrador.component'
import {ConsultaEmpleadoComponent} from './consulta-empleado/consulta-empleado.component'
import { ConsultaPacienteComponent } from './consulta-paciente/consulta-paciente.component'
import {PagosEmpleadosComponent} from './pagos-empleados/pagos-empleados.component'
import {ActualizarEmpleadoComponent} from './actualizar-empleado/actualizar-empleado.component'
import {CitasAgendadasComponent} from './citas-agendadas/citas-agendadas.component'
import { DiagnosticoapacienteComponent } from './diagnosticoapaciente/diagnosticoapaciente.component'
import {RegistroPagosComponent} from './registro-pagos/registro-pagos.component'
import {HomeEmpleadoComponent} from './home-empleado/home-empleado.component'


const routes: Routes = [
  { path: 'crearcuentapaciente', component:  CrearCuentaPacienteComponent},
  { path: 'homeadministrador', component: AdministradorHomeComponent },
  { path: 'administradorregistrarempleado', component: AdministradorNuevoEmpleadoComponent },
  { path: 'administradornuevoadmin', component: AdministradorNueevoAdministradorComponent},
  { path: 'consultarempleados', component: ConsultaEmpleadoComponent},
  { path: 'consultarpacientes', component: ConsultaPacienteComponent},
  { path: 'pagosempleados', component: PagosEmpleadosComponent},
  { path: 'actualizarestado', component: ActualizarEmpleadoComponent},
  { path: 'citasagendadas', component: CitasAgendadasComponent},
  { path: 'diagnosticopsicologo', component: DiagnosticoapacienteComponent},
  { path: 'pagosrecibidos', component: RegistroPagosComponent},
  { path: 'empleadohome', component: HomeEmpleadoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
