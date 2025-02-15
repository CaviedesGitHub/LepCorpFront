import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { MensajeComponent } from './mensaje/mensaje.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ServicioComponent } from './servicio/servicio.component';
import { EquipoComponent } from './equipo/equipo.component';

const routes: Routes = [
  { path: '', component: InicioComponent},
  { path: 'nosotros', component: NosotrosComponent},
  { path: 'servicios', component: ServicioComponent},
  { path: 'equipo', component: EquipoComponent},
  { path: 'mensaje', component: MensajeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

