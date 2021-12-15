import { Component, OnInit } from '@angular/core';
import { TorneoService } from 'src/app/servicio/torneo.service';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-agregar-partido-basquetbol-torneo',
  templateUrl: './agregar-partido-basquetbol-torneo.component.html',
  styleUrls: ['./agregar-partido-basquetbol-torneo.component.css']
})
export class AgregarPartidoBasquetbolTorneoComponent implements OnInit {
  formularioDePartido:FormGroup;

  Torneos:any;
  torneo:any;
  nomUsuario='';
  usuario='';
  Equipos:any;

  constructor(
    public formulario:FormBuilder,
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
  }

  ngOnInit(): void {
    this.torneoService.ObtenerEquiposBasquetbolTorneo(this.torneo).subscribe(respuesta=>{
      console.log(respuesta);
      this.Equipos=respuesta;
    });
  }

  enviarDatos():any{
    // console.log("Me presionaste ");
    console.log(this.formularioDePartido.value);
    this.torneoService.AgregarPartidoBasquetbol(this.formularioDePartido.value).subscribe(respuesta=>{
    this.ruteador.navigateByUrl('/listar-partido-basquetbol');

    });

  }

}
