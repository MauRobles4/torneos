import { Component, OnInit } from '@angular/core';
import { TorneoService } from 'src/app/servicio/torneo.service';
import {Router,ActivatedRoute} from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-listar-partido-equipo-basquetbol',
  templateUrl: './listar-partido-equipo-basquetbol.component.html',
  styleUrls: ['./listar-partido-equipo-basquetbol.component.css']
})
export class ListarPartidoEquipoBasquetbolComponent implements OnInit {
  Partidos:any;
  equipo:any;
  nomUsuario='';
  usuario='';
  filterPost = ''; 
  page_size: number = 10;
  page_number: number = 1;
  pageSizeOptions = [5, 10, 20, 50, 100];

  
  constructor(
    private activateRoute:ActivatedRoute,
    private torneoService:TorneoService,
    private cookieService:CookieService

  ) {
    this.nomUsuario=cookieService.get("nombreUsuario");
    this.usuario=cookieService.get("tipoUsuario");
    this.equipo=this.activateRoute.snapshot.paramMap.get('equipo');
    console.log("Este el torneo del que se toman los partidos "+this.equipo);

   }

  ngOnInit(): void {
    this.torneoService.ObtenerPartidosBasquetbolEquipo(this.equipo).subscribe(respuesta=>{
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
