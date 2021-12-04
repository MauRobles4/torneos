import { Component, OnInit } from '@angular/core';
import { TorneoService } from 'src/app/servicio/torneo.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-listar-equipos-torneo-basquetbol',
  templateUrl: './listar-equipos-torneo-basquetbol.component.html',
  styleUrls: ['./listar-equipos-torneo-basquetbol.component.css']
})
export class ListarEquiposTorneoBasquetbolComponent implements OnInit {
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
    this.torneoService.ObtenerEquiposBasquetbolTorneo(this.torneo).subscribe(respuesta=>{
      console.log(respuesta);
      this.Equipos=respuesta;
    });
  }

  borrarRegistro(id:any,iControl:any){
    console.log(id);
    console.log(iControl);
    if(window.confirm("Desea borrar este equipo?")){

      this.torneoService.BorrarEquipoBasquetbol(id).subscribe((respuesta)=>{
                this.Equipos.splice(iControl,1);
      });
    }
      
  }

}
