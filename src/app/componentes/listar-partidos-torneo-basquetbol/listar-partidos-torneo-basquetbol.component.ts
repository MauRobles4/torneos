import { Component, OnInit } from '@angular/core';
import { TorneoService } from 'src/app/servicio/torneo.service';
import {Router,ActivatedRoute} from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-listar-partidos-torneo-basquetbol',
  templateUrl: './listar-partidos-torneo-basquetbol.component.html',
  styleUrls: ['./listar-partidos-torneo-basquetbol.component.css']
})
export class ListarPartidosTorneoBasquetbolComponent implements OnInit {
  Partidos:any;
  torneo:any;
  filterPost = ''; 

  page_size: number = 10;
  page_number: number = 1;
  pageSizeOptions = [5, 10, 20, 50, 100];

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

  
 handlePage(e: PageEvent) {
  this.page_size = e.pageSize;
  this.page_number = e.pageIndex + 1;
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
