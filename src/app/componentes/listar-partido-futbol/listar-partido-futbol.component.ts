import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { TorneoService } from 'src/app/servicio/torneo.service';

@Component({
  selector: 'app-listar-partido-futbol',
  templateUrl: './listar-partido-futbol.component.html',
  styleUrls: ['./listar-partido-futbol.component.css']
})
export class ListarPartidoFutbolComponent implements OnInit {
  Partidos:any;
  filterPost = ''; 
  usuario='';
  page_size: number = 10;
  page_number: number = 1;
  pageSizeOptions = [5, 10, 20, 50, 100];

  constructor(
    private torneoService:TorneoService
  ) { 
    this.usuario='false';
  }

  ngOnInit(): void {
    this.torneoService.ObtenerPartidosFutbol().subscribe(respuesta=>{
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

      this.torneoService.BorrarPartidoFutbol(id).subscribe((respuesta)=>{
                this.Partidos.splice(iControl,1);
      });
    }
      
  }

}
