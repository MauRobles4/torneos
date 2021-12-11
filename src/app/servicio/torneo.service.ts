import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipo, Torneo } from './Torneo';

@Injectable({
  providedIn: 'root'
})
export class TorneoService {
  API:string='http://localhost/torneo/';

  constructor(private clientHttp:HttpClient) { }

  AgregarTorneo(datosTorneo:Torneo):Observable<any>{
    return this.clientHttp.post(this.API+"?insertar=1",datosTorneo);

  }

  ObtenerTorneos(){
    return this.clientHttp.get(this.API)
  }

  ObtenerTorneosFutbol(){
    return this.clientHttp.get(this.API+"?torneo_futbol");
  }

  ObtenerTorneosBasquetbol(){
    return this.clientHttp.get(this.API+"?torneo_basquetbol");
  }

  ObtenerUsuarios(){
    return this.clientHttp.get(this.API+"?consultar_usuarios");
  }

  ObtenerEquiposFutbol(){
    return this.clientHttp.get(this.API+"?equipo_futbol");
  }

  ObtenerEquiposFutbolTorneo(torneo:any):Observable<any>{
    return this.clientHttp.get(this.API+"?equipo_futbol_torneo="+torneo);
  }

  ObtenerEquiposBasquetbol(){
    return this.clientHttp.get(this.API+"?equipo_basquetbol");
  }

  ObtenerEquiposBasquetbolTorneo(torneo:any):Observable<any>{
    return this.clientHttp.get(this.API+"?equipo_basquetbol_torneo="+torneo);
  }

  ObtenerPartidosFutbol(){
    return this.clientHttp.get(this.API+"?partidos_futbol");
  }

  ObtenerProximosPartidosFutbol(fecha:string):Observable<any>{
    return this.clientHttp.get(this.API+"?proximos_partidos_futbol="+fecha);
  }

  ObtenerPartidosFutbolTorneo(torneo:any):Observable<any>{
    return this.clientHttp.get(this.API+"?partidos_futbol_torneo="+torneo);
  }

  ObtenerPartidosBasquetbolTorneo(torneo:any):Observable<any>{
    return this.clientHttp.get(this.API+"?partidos_basquetbol_torneo="+torneo);
  }

  ObtenerPartidosBasquetbol(){
    return this.clientHttp.get(this.API+"?partidos_basquetbol");
  }

  ObtenerProximosPartidosBasquetbol(fecha:any):Observable<any>{
    return this.clientHttp.get(this.API+"?proximos_partidos_basquetbol="+fecha);
  }

  ObtenerPartidosFutbolEquipo(equipo:any):Observable<any>{
    return this.clientHttp.get(this.API+"?partidos_futbol_equipo="+equipo);
  }

  ObtenerPartidosBasquetbolEquipo(equipo:any):Observable<any>{
    return this.clientHttp.get(this.API+"?partidos_basquetbol_equipo="+equipo);
  }

  BorrarTorneo(id:any):Observable<any>{
    return this.clientHttp.get(this.API+"?borrar="+id);

  }

  BorrarTorneoBasquetbol(id:any):Observable<any>{
    return this.clientHttp.get(this.API+"?borrar_torneo_basquetbol="+id);

  }

  BorrarUsuario(id:any):Observable<any>{
    return this.clientHttp.get(this.API+"?borrar_usuario="+id);

  }

  BorrarEquipoFutbol(id:any):Observable<any>{
    return this.clientHttp.get(this.API+"?borrar_futbol="+id);

  }

  BorrarPartidoFutbol(id:any):Observable<any>{
    return this.clientHttp.get(this.API+"?borrar_partido_futbol="+id);

  }

  BorrarPartidoBasquetbol(id:any):Observable<any>{
    return this.clientHttp.get(this.API+"?borrar_partido_basquetbol="+id);

  }

  BorrarEquipoBasquetbol(id:any):Observable<any>{
    return this.clientHttp.get(this.API+"?borrar_basquetbol="+id);

  }

  ObtenerTorneo(id:any):Observable<any>{
    return this.clientHttp.get(this.API+"?consultar="+id);

  }

  ObtenerTorneoBasquetbol(id:any):Observable<any>{
    return this.clientHttp.get(this.API+"?consultar_torneo_basquetbol="+id);

  }

  ObtenerUsuario(id:any):Observable<any>{
    return this.clientHttp.get(this.API+"?consultar_usuario="+id);

  }

  ObtenerEquipoFutbol(id:any):Observable<any>{
    return this.clientHttp.get(this.API+"?consultar_futbol="+id);

  }

  ObtenerEquipoBasquetbol(id:any):Observable<any>{
    return this.clientHttp.get(this.API+"?consultar_basquetbol="+id);

  }

  ObtenerPartidoFutbol(id:any):Observable<any>{
    return this.clientHttp.get(this.API+"?consultar_partido_futbol="+id);

  }

  
  ObtenerPartidoBasquetbol(id:any):Observable<any>{
    return this.clientHttp.get(this.API+"?consultar_partido_basquetbol="+id);

  }


  EditarTorneo(id:any,datosTorneo:any):Observable<any>{
    return this.clientHttp.post(this.API+"?actualizar="+id,datosTorneo);

  }

  EditarTorneoBasquetbol(id:any,datosTorneo:any):Observable<any>{
    return this.clientHttp.post(this.API+"?actualizar_torneo_basquetbol="+id,datosTorneo);

  }

  EditarUsuario(id:any,datosUsuario:any):Observable<any>{
    return this.clientHttp.post(this.API+"?actualizar_usuario="+id,datosUsuario);

  }

  EditarEquipoFutbol(id:any,datosTorneo:any):Observable<any>{
    return this.clientHttp.post(this.API+"?actualizar_futbol="+id,datosTorneo);

  }

  EditarEquipoBasquetbol(id:any,datosTorneo:any):Observable<any>{
    return this.clientHttp.post(this.API+"?actualizar_basquetbol="+id,datosTorneo);

  }

  EditarPartidoFutbol(id:any,datosTorneo:any):Observable<any>{
    return this.clientHttp.post(this.API+"?actualizar_partido_futbol="+id,datosTorneo);

  }

  EditarPartidoBasquetbol(id:any,datosTorneo:any):Observable<any>{
    return this.clientHttp.post(this.API+"?actualizar_partido_basquetbol="+id,datosTorneo);

  }

  AgregarUsuario(datosUsuario:any):Observable<any>{
    return this.clientHttp.post(this.API+"?insertarUsuario=1",datosUsuario);

  }


  AgregarEquipo(datosEquipo:Equipo):Observable<any>{
    return this.clientHttp.post(this.API+"?insertarEquipo=1",datosEquipo);

  }

  AgregarEquipoBasquetbol(datosEquipo:Equipo):Observable<any>{
    return this.clientHttp.post(this.API+"?insertar_equipo_basquetbol=1",datosEquipo);

  }

  AgregarPartidoFutbol(datosTorneo:Torneo):Observable<any>{
    return this.clientHttp.post(this.API+"?insertar_partido_futbol=1",datosTorneo);

  }

  AgregarPartidoBasquetbol(datosTorneo:Torneo):Observable<any>{
    return this.clientHttp.post(this.API+"?insertar_partido_basquetbol=1",datosTorneo);

  }

  ObtenerFechaFinal(){
    return this.clientHttp.get(this.API+"?fecha_final");
  }

  LoginUser(usuario:string, password:string):Observable<any>{
    return this.clientHttp.get(`${this.API}index.php?login_user=1&user=${usuario}&pas=${password}`);
    // return this.http.get(${this.url}APIgastos.php?iniciosesion=1&user=${user}&pas=${password});

  }

  ObtenerEquiposMasPartidos(){
    return this.clientHttp.get(this.API+"?equiposMasPartidos");
  }

}
