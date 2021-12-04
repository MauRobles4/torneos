import { Component, OnInit } from '@angular/core';
import { TorneoService } from 'src/app/servicio/torneo.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-listar-partidos-torneo-basquetbol',
  templateUrl: './listar-partidos-torneo-basquetbol.component.html',
  styleUrls: ['./listar-partidos-torneo-basquetbol.component.css']
})
export class ListarPartidosTorneoBasquetbolComponent implements OnInit {
  Partidos:any;
  torneo:any;
  filterPost = ''; 
  constructor(
    private activateRoute:ActivatedRoute,
    private torneoService:TorneoService
  ) { 
    this.torneo=this.activateRoute.snapshot.paramMap.get('torneo');
    console.log("Este el torneo del que se toman los partidos "+this.torneo);

  }

  ngOnInit(): void {
    this.torneoService.ObtenerPartidosBasquetbolTorneo(this.torneo).subscribe(respuesta=>{
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
