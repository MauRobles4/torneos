import { Component, OnInit } from '@angular/core';
import { TorneoService } from 'src/app/servicio/torneo.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-listar-partido-equipo-basquetbol',
  templateUrl: './listar-partido-equipo-basquetbol.component.html',
  styleUrls: ['./listar-partido-equipo-basquetbol.component.css']
})
export class ListarPartidoEquipoBasquetbolComponent implements OnInit {
  Partidos:any;
  equipo:any;
  filterPost = ''; 
  
  constructor(
    private activateRoute:ActivatedRoute,
    private torneoService:TorneoService

  ) {
    this.equipo=this.activateRoute.snapshot.paramMap.get('equipo');
    console.log("Este el torneo del que se toman los partidos "+this.equipo);

   }

  ngOnInit(): void {
    this.torneoService.ObtenerPartidosBasquetbolEquipo(this.equipo).subscribe(respuesta=>{
      console.log(respuesta);
      this.Partidos=respuesta;
    });
  }

  borrarRegistro(id:any,iControl:any){
    console.log(id);
    console.log(iControl);
    if(window.confirm("Desea borrar este partido?")){

      this.torneoService.BorrarPartidoBasquetbol(id).subscribe((respuesta)=>{
                this.Partidos.splice(iControl,1);
      });
    }
      
  }

}
