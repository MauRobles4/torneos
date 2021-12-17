import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { TorneoService } from 'src/app/servicio/torneo.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listar-torneo-basquetbol',
  templateUrl: './listar-torneo-basquetbol.component.html',
  styleUrls: ['./listar-torneo-basquetbol.component.css']
})
export class ListarTorneoBasquetbolComponent implements OnInit {
  Torneos: any;
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
    else if(cookieService.get("tipoUsuario")=="Usuario"){
      this.ruteador.navigateByUrl('/home');
      return

    }
    this.nomUsuario=cookieService.get("nombreUsuario");
    this.usuario=cookieService.get("tipoUsuario");
  }

  ngOnInit(): void {
    this.torneoService.ObtenerTorneosBasquetbol().subscribe(respuesta => {
      console.log(respuesta);
      this.Torneos = respuesta;
    });
  }


  handlePage(e: PageEvent) {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }

  borrarRegistro(id: any, iControl: any) {
    console.log(id);
    console.log(iControl);
    if (window.confirm("Desea borrar este torneo?")) {

      this.torneoService.BorrarTorneoBasquetbol(id).subscribe((respuesta) => {
        this.Torneos.splice(iControl, 1);
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
