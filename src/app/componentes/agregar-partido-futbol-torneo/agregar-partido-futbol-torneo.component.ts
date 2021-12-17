import { Component, OnInit } from '@angular/core';
import { TorneoService } from 'src/app/servicio/torneo.service';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-agregar-partido-futbol-torneo',
  templateUrl: './agregar-partido-futbol-torneo.component.html',
  styleUrls: ['./agregar-partido-futbol-torneo.component.css']
})
export class AgregarPartidoFutbolTorneoComponent implements OnInit {
  formularioDePartido:FormGroup;

  Torneos:any;
  torneo:any;
  nomUsuario='';
  usuario='';
  Equipos:any;

  constructor(public formulario:FormBuilder,
    private torneoService:TorneoService,
    private ruteador:Router,
    private activateRoute:ActivatedRoute,
    private cookieService:CookieService

  ) {
    this.nomUsuario=cookieService.get("nombreUsuario");
    this.usuario=cookieService.get("tipoUsuario");

    this.torneo=this.activateRoute.snapshot.paramMap.get('torneo');
    console.log("Este el torneo del que se toman los equipos "+this.torneo);
 
    this.formularioDePartido=this.formulario.group({
      equipo1:[''],
      equipo2:[''],
      horario:[''],
      estadio:[''],
      lugar:[''],
      torneo:this.torneo
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
    this.torneoService.ObtenerEquiposFutbolTorneo(this.torneo).subscribe(respuesta=>{
      console.log(respuesta);
      this.Equipos=respuesta;
    });
    // this.torneoService.ObtenerTorneosFutbol().subscribe(respuesta=>{
    //   console.log(respuesta);
    //   this.Torneos=respuesta;
    // });
  }

  enviarDatos():any{
    // console.log("Me presionaste ");
    console.log(this.formularioDePartido.value);
    this.torneoService.AgregarPartidoFutbol(this.formularioDePartido.value).subscribe(respuesta=>{
    alert("Partido agregado exitosamente");
    this.ruteador.navigateByUrl('/listar-partido-futbol');

    });

  }

    cerrarSesion(){
    // this.cookies.delete("token");
    this.cookieService.delete("nombreUsuario");
    this.cookieService.delete("tipoUsuario");
    this.ruteador.navigateByUrl('/login');
  }

}
