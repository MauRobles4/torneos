import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEquipoBasquetbolComponent } from './componentes/agregar-equipo-basquetbol/agregar-equipo-basquetbol.component';
import { AgregarEquipoComponent } from './componentes/agregar-equipo/agregar-equipo.component';
import { AgregarPartidoBasquetbolTorneoComponent } from './componentes/agregar-partido-basquetbol-torneo/agregar-partido-basquetbol-torneo.component';
import { AgregarPartidoBasquetbolComponent } from './componentes/agregar-partido-basquetbol/agregar-partido-basquetbol.component';
import { AgregarPartidoFutbolTorneoComponent } from './componentes/agregar-partido-futbol-torneo/agregar-partido-futbol-torneo.component';
import { AgregarPartidoFutbolComponent } from './componentes/agregar-partido-futbol/agregar-partido-futbol.component';
import { AgregarTorneoComponent } from './componentes/agregar-torneo/agregar-torneo.component';
import { AgregarUsuarioComponent } from './componentes/agregar-usuario/agregar-usuario.component';
import { EditarEquipoBasquetbolComponent } from './componentes/editar-equipo-basquetbol/editar-equipo-basquetbol.component';
import { EditarEquipoFutbolComponent } from './componentes/editar-equipo-futbol/editar-equipo-futbol.component';
import { EditarPartidoBasquetbolComponent } from './componentes/editar-partido-basquetbol/editar-partido-basquetbol.component';
import { EditarPartidoFutbolComponent } from './componentes/editar-partido-futbol/editar-partido-futbol.component';
import { EditarTorneoBasquetbolComponent } from './componentes/editar-torneo-basquetbol/editar-torneo-basquetbol.component';
import { EditarTorneoComponent } from './componentes/editar-torneo/editar-torneo.component';
import { EditarUsuarioComponent } from './componentes/editar-usuario/editar-usuario.component';
import { GraficasFutbolComponent } from './componentes/graficas-futbol/graficas-futbol.component';
import { HomeComponent } from './componentes/home/home.component';
import { ListarEquipoBasquetbolComponent } from './componentes/listar-equipo-basquetbol/listar-equipo-basquetbol.component';
import { ListarEquipoFutbolComponent } from './componentes/listar-equipo-futbol/listar-equipo-futbol.component';
import { ListarEquiposTorneoBasquetbolComponent } from './componentes/listar-equipos-torneo-basquetbol/listar-equipos-torneo-basquetbol.component';
import { ListarEquiposTorneoComponent } from './componentes/listar-equipos-torneo/listar-equipos-torneo.component';
import { ListarPartidoBasquetbolComponent } from './componentes/listar-partido-basquetbol/listar-partido-basquetbol.component';
import { ListarPartidoEquipoBasquetbolComponent } from './componentes/listar-partido-equipo-basquetbol/listar-partido-equipo-basquetbol.component';
import { ListarPartidoEquipoFutbolComponent } from './componentes/listar-partido-equipo-futbol/listar-partido-equipo-futbol.component';
import { ListarPartidoFutbolComponent } from './componentes/listar-partido-futbol/listar-partido-futbol.component';
import { ListarPartidosTorneoBasquetbolComponent } from './componentes/listar-partidos-torneo-basquetbol/listar-partidos-torneo-basquetbol.component';
import { ListarPartidosTorneoComponent } from './componentes/listar-partidos-torneo/listar-partidos-torneo.component';
import { ListarTorneoBasquetbolComponent } from './componentes/listar-torneo-basquetbol/listar-torneo-basquetbol.component';
import { ListarTorneoComponent } from './componentes/listar-torneo/listar-torneo.component';
import { ListarUsuariosComponent } from './componentes/listar-usuarios/listar-usuarios.component';
import { LoginComponent } from './componentes/login/login.component';
import { TablaClasificacionComponent } from './componentes/tabla-clasificacion/tabla-clasificacion.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'home'},
  {path:'agregar-torneo',component:AgregarTorneoComponent},
  {path:'listar-torneo',component:ListarTorneoComponent},
  {path:'listar-torneo-basquetbol',component:ListarTorneoBasquetbolComponent},  
  {path:'editar-torneo/:id',component:EditarTorneoComponent},
  {path:'editar-torneo-basquetbol/:id',component:EditarTorneoBasquetbolComponent},
  {path:'agregar-equipo',component:AgregarEquipoComponent},
  {path:'listar-equipo-futbol',component:ListarEquipoFutbolComponent},
  {path:'listar-equipo-basquetbol',component:ListarEquipoBasquetbolComponent},
  {path:'editar-equipo-futbol/:id',component:EditarEquipoFutbolComponent},
  {path:'editar-equipo-basquetbol/:id',component:EditarEquipoBasquetbolComponent},
  {path:'agregar-partido-futbol',component:AgregarPartidoFutbolComponent},
  {path:'listar-partido-futbol',component:ListarPartidoFutbolComponent},
  {path:'editar-partido-futbol/:id',component:EditarPartidoFutbolComponent},
  {path:'agregar-partido-basquetbol',component:AgregarPartidoBasquetbolComponent},
  {path:'listar-partido-basquetbol',component:ListarPartidoBasquetbolComponent},
  {path:'editar-partido-basquetbol/:id',component:EditarPartidoBasquetbolComponent},
  {path:'listar-partidos-torneo/:torneo',component:ListarPartidosTorneoComponent},
  {path:'listar-partidos-torneo-basquetbol/:torneo',component:ListarPartidosTorneoBasquetbolComponent},
  {path:'agregar-equipo-basquetbol',component:AgregarEquipoBasquetbolComponent},
  {path:'listar-equipos-torneo/:torneo',component:ListarEquiposTorneoComponent},
  {path:'listar-equipos-torneo-basquetbol/:torneo',component:ListarEquiposTorneoBasquetbolComponent},
  {path:'listar-partido-equipo-futbol/:equipo',component:ListarPartidoEquipoFutbolComponent},
  {path:'listar-partido-equipo-basquetbol/:equipo',component:ListarPartidoEquipoBasquetbolComponent},
  {path:'agregar-partido-futbol-torneo/:torneo',component:AgregarPartidoFutbolTorneoComponent},
  {path:'agregar-partido-basquetbol-torneo/:torneo',component:AgregarPartidoBasquetbolTorneoComponent},
  {path:'login',component:LoginComponent},
  {path:'agregar-usuario',component:AgregarUsuarioComponent},
  {path:'editar-usuario/:id',component:EditarUsuarioComponent},
  {path:'listar-usuarios',component:ListarUsuariosComponent},
  {path:'home',component:HomeComponent},
  {path:'graficas-futbol',component:GraficasFutbolComponent},
  {path:'tabla-clasificacion',component:TablaClasificacionComponent}
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
