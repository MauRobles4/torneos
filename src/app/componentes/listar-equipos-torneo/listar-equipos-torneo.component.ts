import { Component, OnInit } from '@angular/core';
import { TorneoService } from 'src/app/servicio/torneo.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-listar-equipos-torneo',
  templateUrl: './listar-equipos-torneo.component.html',
  styleUrls: ['./listar-equipos-torneo.component.css']
})
export class ListarEquiposTorneoComponent implements OnInit {
  Equipos:any;
  torneo:any;
  filterPost = ''; 

  constructor(
    private torneoService:TorneoService,
    private activateRoute:ActivatedRoute,


  ) {
    this.torneo=this.activateRoute.snapshot.paramMap.get('torneo');
    console.log("Este el torneo del que se toman los equipos "+this.torneo);

   }

  ngOnInit(): void {
    this.torneoService.ObtenerEquiposFutbolTorneo(this.torneo).subscribe(respuesta=>{
      console.log(respuesta);
      this.Equipos=respuesta;
    });
  }

  borrarRegistro(id:any,iControl:any){
    console.log(id);
    console.log(iControl);
    if(window.confirm("Desea borrar este equipo?")){

      this.torneoService.BorrarEquipoFutbol(id).subscribe((respuesta)=>{
                this.Equipos.splice(iControl,1);
      });
    }
      
  }

}
