import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { TorneoService } from 'src/app/servicio/torneo.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listar-equipo-futbol',
  templateUrl: './listar-equipo-futbol.component.html',
  styleUrls: ['./listar-equipo-futbol.component.css']
})
export class ListarEquipoFutbolComponent implements OnInit {

  Equipos: any;
  filterPost = '';
  nomUsuario = '';
  usuario = '';

  page_size: number = 10;
  page_number: number = 1;
  pageSizeOptions = [5, 10, 20, 50, 100];

  constructor(
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
  }

  ngOnInit(): void {
    this.torneoService.ObtenerEquiposFutbol().subscribe(respuesta => {
      console.log(respuesta);
      this.Equipos = respuesta;
    });
  }
  handlePage(e: PageEvent) {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }

  borrarRegistro(id: any, iControl: any) {
    console.log(id);
    console.log(iControl);
    if (window.confirm("Desea borrar este equipo?")) {

      this.torneoService.BorrarEquipoFutbol(id).subscribe((respuesta) => {
        this.Equipos.splice(iControl, 1);
        this.torneoService.ObtenerEquiposFutbol().subscribe(respuesta => {
          console.log(respuesta);
          this.Equipos = respuesta;
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
