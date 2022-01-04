import { Component, OnInit } from '@angular/core';
import { TorneoService } from 'src/app/servicio/torneo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-listar-partidos-torneo',
  templateUrl: './listar-partidos-torneo.component.html',
  styleUrls: ['./listar-partidos-torneo.component.css']
})
export class ListarPartidosTorneoComponent implements OnInit {
  Partidos: any;
  torneo: any;
  filterPost = '';
  nomUsuario = '';
  usuario = '';
  page_size: number = 10;
  page_number: number = 1;
  pageSizeOptions = [5, 10, 20, 50, 100];
  constructor(
    private activateRoute: ActivatedRoute,
    private torneoService: TorneoService,
    private cookieService:CookieService,
        private ruteador:Router

  ) {
    if(cookieService.get("nombreUsuario")==""){
      this.ruteador.navigateByUrl('/login');
      return
    }
    
    this.nomUsuario=cookieService.get("nombreUsuario");
    this.usuario=cookieService.get("tipoUsuario");

    this.torneo = this.activateRoute.snapshot.paramMap.get('torneo');
    console.log("Este el torneo del que se toman los partidos " + this.torneo);

  }

  ngOnInit(): void {
    this.torneoService.ObtenerPartidosFutbolTorneo(this.torneo).subscribe(respuesta => {
      console.log(respuesta);
      this.Partidos = respuesta;
    });
  }
  handlePage(e: PageEvent) {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }

  borrarRegistro(id: any, iControl: any) {
    console.log(id);
    console.log(iControl);
    if (window.confirm("Desea borrar este partido?")) {

      this.torneoService.BorrarPartidoFutbol(id).subscribe((respuesta) => {
        this.Partidos.splice(iControl, 1);
        this.torneoService.ObtenerPartidosFutbolTorneo(this.torneo).subscribe(respuesta => {
          console.log(respuesta);
          this.Partidos = respuesta;
        });
      });
    }

  }

    cerrarSesion(){
    // this.cookies.delete("token");
    this.cookieService.delete("nombreUsuario");
    this.cookieService.delete("tipoUsuario");
    this.ruteador.navigateByUrl('/login');
  }

}
