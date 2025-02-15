import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { MatIconModule } from '@angular/material/icon';
import { InicioComponent } from './inicio/inicio.component';
import { MensajeComponent } from './mensaje/mensaje.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ServicioComponent } from './servicio/servicio.component';
import { EquipoComponent } from './equipo/equipo.component';

@NgModule({
  declarations: [					
      AppComponent,
      InicioComponent,
      MensajeComponent,
      NosotrosComponent,
      ServicioComponent,
      EquipoComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
