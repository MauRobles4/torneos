import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { TorneoService } from 'src/app/servicio/torneo.service';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {
  Usuarios: any;
  filterPost = '';

  page_size: number = 10;
  page_number: number = 1;
  pageSizeOptions = [5, 10, 20, 50, 100];

  constructor(    private torneoService: TorneoService
    ) { }

  ngOnInit(): void {
    this.torneoService.ObtenerUsuarios().subscribe(respuesta => {
      console.log(respuesta);
      this.Usuarios = respuesta;
    });
  }

  handlePage(e: PageEvent) {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }

  borrarRegistro(id: any, iControl: any) {
    console.log(id);
    console.log(iControl);
    if (window.confirm("Desea borrar este usuario?")) {

      this.torneoService.BorrarUsuario(id).subscribe((respuesta) => {
        this.Usuarios.splice(iControl, 1);
      });
    }
  }

}
