import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarTorneoComponent } from './componentes/agregar-torneo/agregar-torneo.component';
import { EditarTorneoComponent } from './componentes/editar-torneo/editar-torneo.component';
import { ListarTorneoComponent } from './componentes/listar-torneo/listar-torneo.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ListarPartidoFutbolComponent } from './componentes/listar-partido-futbol/listar-partido-futbol.component';
import { ListarPartidoBasquetbolComponent } from './componentes/listar-partido-basquetbol/listar-partido-basquetbol.component';
import { AgregarEquipoComponent } from './componentes/agregar-equipo/agregar-equipo.component';
import { ListarEquipoFutbolComponent } from './componentes/listar-equipo-futbol/listar-equipo-futbol.component';
import { ListarEquipoBasquetbolComponent } from './componentes/listar-equipo-basquetbol/listar-equipo-basquetbol.component';
import { AgregarPartidoFutbolComponent } from './componentes/agregar-partido-futbol/agregar-partido-futbol.component';
import { AgregarPartidoBasquetbolComponent } from './componentes/agregar-partido-basquetbol/agregar-partido-basquetbol.component';
import { EditarPartidoFutbolComponent } from './componentes/editar-partido-futbol/editar-partido-futbol.component';
import { EditarPartidoBasquetbolComponent } from './componentes/editar-partido-basquetbol/editar-partido-basquetbol.component';
import { EditarEquipoFutbolComponent } from './componentes/editar-equipo-futbol/editar-equipo-futbol.component';
import { EditarEquipoBasquetbolComponent } from './componentes/editar-equipo-basquetbol/editar-equipo-basquetbol.component';
import { ListarPartidosTorneoComponent } from './componentes/listar-partidos-torneo/listar-partidos-torneo.component';
import { ListarPartidosTorneoBasquetbolComponent } from './componentes/listar-partidos-torneo-basquetbol/listar-partidos-torneo-basquetbol.component';
import { ListarTorneoBasquetbolComponent } from './componentes/listar-torneo-basquetbol/listar-torneo-basquetbol.component';
import { ListarPartidoEquipoFutbolComponent } from './componentes/listar-partido-equipo-futbol/listar-partido-equipo-futbol.component';
import { ListarPartidoEquipoBasquetbolComponent } from './componentes/listar-partido-equipo-basquetbol/listar-partido-equipo-basquetbol.component';
import { EditarTorneoBasquetbolComponent } from './componentes/editar-torneo-basquetbol/editar-torneo-basquetbol.component';
import { ListarEquiposTorneoComponent } from './componentes/listar-equipos-torneo/listar-equipos-torneo.component';
import { ListarEquiposTorneoBasquetbolComponent } from './componentes/listar-equipos-torneo-basquetbol/listar-equipos-torneo-basquetbol.component';
import { AgregarEquipoBasquetbolComponent } from './componentes/agregar-equipo-basquetbol/agregar-equipo-basquetbol.component';
import { HomeComponent } from './componentes/home/home.component';
import { AgregarPartidoFutbolTorneoComponent } from './componentes/agregar-partido-futbol-torneo/agregar-partido-futbol-torneo.component';
import { AgregarPartidoBasquetbolTorneoComponent } from './componentes/agregar-partido-basquetbol-torneo/agregar-partido-basquetbol-torneo.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FilterPartidoPipe } from './pipes/filter-partido.pipe';
import { FilterTorneoPipe } from './pipes/filter-torneo.pipe';
import { PaginatePipe } from './pipes/paginate.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator'; 
import { CustomPaginatorIntl } from './paginator-es';
import { LoginComponent } from './componentes/login/login.component';
import { AgregarUsuarioComponent } from './componentes/agregar-usuario/agregar-usuario.component';
import { ListarUsuariosComponent } from './componentes/listar-usuarios/listar-usuarios.component';
import { FilterUsuarioPipe } from './pipes/filter-usuario.pipe';
import { EditarUsuarioComponent } from './componentes/editar-usuario/editar-usuario.component';
import { NgChartsModule } from 'ng2-charts';
import { GraficasFutbolComponent } from './componentes/graficas-futbol/graficas-futbol.component';
import { TablaClasificacionComponent } from './componentes/tabla-clasificacion/tabla-clasificacion.component';


@NgModule({
  declarations: [
    AppComponent,
    AgregarTorneoComponent,
    EditarTorneoComponent,
    ListarTorneoComponent,        
    ListarPartidoFutbolComponent,
    ListarPartidoBasquetbolComponent,
    AgregarEquipoComponent,    
    ListarEquipoFutbolComponent,
    ListarEquipoBasquetbolComponent,
    AgregarPartidoFutbolComponent,
    AgregarPartidoBasquetbolComponent,
    EditarPartidoFutbolComponent,
    EditarPartidoBasquetbolComponent,
    EditarEquipoFutbolComponent,
    EditarEquipoBasquetbolComponent,
    ListarPartidosTorneoComponent,
    ListarPartidosTorneoBasquetbolComponent,
    ListarTorneoBasquetbolComponent,
    ListarPartidoEquipoFutbolComponent,
    ListarPartidoEquipoBasquetbolComponent,
    EditarTorneoBasquetbolComponent,
    ListarEquiposTorneoComponent,
    ListarEquiposTorneoBasquetbolComponent,
    AgregarEquipoBasquetbolComponent,
    HomeComponent,
    AgregarPartidoFutbolTorneoComponent,
    AgregarPartidoBasquetbolTorneoComponent,
    FilterPipe,
    FilterPartidoPipe,
    FilterTorneoPipe,
    PaginatePipe,
    LoginComponent,
    AgregarUsuarioComponent,
    ListarUsuariosComponent,
    FilterUsuarioPipe,
    EditarUsuarioComponent,
    GraficasFutbolComponent,
    TablaClasificacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    NgChartsModule
  ],
  providers: [{
    // PAGINACION 
    provide: MatPaginatorIntl,
    useClass: CustomPaginatorIntl
  }
],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
