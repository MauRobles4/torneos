import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { TorneoService } from 'src/app/servicio/torneo.service';
import { CookieService } from 'ngx-cookie-service';

import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-editar-partido-basquetbol',
  templateUrl: './editar-partido-basquetbol.component.html',
  styleUrls: ['./editar-partido-basquetbol.component.css']
})
export class EditarPartidoBasquetbolComponent implements OnInit {
  formularioDePartido:FormGroup;
  elID:any;
  torneo:any;
  Torneos:any;
  Equipos:any;
  nomUsuario='';
  usuario='';
  

  constructor(
    public formulario:FormBuilder,
    private activateRoute:ActivatedRoute,
    private torneoService:TorneoService,
    private ruteador:Router,
    private cookieService:CookieService
  ) { 
    this.nomUsuario=cookieService.get("nombreUsuario");
    this.usuario=cookieService.get("tipoUsuario");
    this.elID=this.activateRoute.snapshot.paramMap.get('id');
    this.torneo=this.activateRoute.snapshot.paramMap.get('torneo');
    console.log("Este es el id del editar "+this.elID);


    this.torneoService.ObtenerPartidoBasquetbol(this.elID).subscribe(respuesta=>{
      console.log(respuesta);
      this.formularioDePartido.setValue({
        equipo1:respuesta[0]['equipo1'],
        equipo2:respuesta[0]['equipo2'],
        horario:respuesta[0]['horario'],
        estadio:respuesta[0]['estadio'],
        lugar:respuesta[0]['lugar'],
        torneo:respuesta[0]['torneo'],
        puntos_local:respuesta[0]['puntos_local'],
        puntos_visitante:respuesta[0]['puntos_visitante']
      });
      

    });
    
    this.formularioDePartido=this.formulario.group({
        equipo1:[''],
        equipo2:[''],
        horario:[''],
        estadio:[''],
        lugar:[''],
        torneo:[''],
        puntos_local:[0],
        puntos_visitante:[0]
    });

    if(cookieService.get("nombreUsuario")==""){
      this.ruteador.navigateByUrl('/login');
      return
    }
    else if(cookieService.get("tipoUsuario")=="Usuario"){
      this.ruteador.navigateByUrl('/home');
      return

    }

  }

  ngOnInit(): void {
    this.torneoService.ObtenerEquiposBasquetbolTorneo(this.torneo).subscribe(respuesta=>{
      console.log(respuesta);
      this.Equipos=respuesta;
    });
    this.torneoService.ObtenerTorneosBasquetbol().subscribe(respuesta=>{
      console.log(respuesta);
      this.Torneos=respuesta;
    });
  }

  enviarDatos():any{
    // console.log("Me presionaste ");
    console.log(this.elID);
    if (this.formularioDePartido.value.puntos_visitante==null){
      
      this.formularioDePartido.value.puntos_visitante=0;
      console.log("Entra en visitante");
    } 
    if(this.formularioDePartido.value.puntos_local==null){

      this.formularioDePartido.value.puntos_local=0;
      console.log("Entra en local");
    }
    console.log(this.formularioDePartido.value);
    this.torneoService.EditarPartidoBasquetbol(this.elID,this.formularioDePartido.value).subscribe(()=>{
      alert("Partido editado exitosamente");
      this.ruteador.navigateByUrl('/listar-partido-basquetbol');
    });
  }

    cerrarSesion(){
    // this.cookies.delete("token");
    this.cookieService.delete("nombreUsuario");
    this.cookieService.delete("tipoUsuario");
    this.ruteador.navigateByUrl('/login');
  }

}
