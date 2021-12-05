import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

import { TorneoService } from 'src/app/servicio/torneo.service';

@Component({
  selector: 'app-listar-torneo',
  templateUrl: './listar-torneo.component.html',
  styleUrls: ['./listar-torneo.component.css']
})
export class ListarTorneoComponent implements OnInit {

  Torneos:any;
  filterPost = ''; 

  page_size: number = 10;
  page_number: number = 1;
  pageSizeOptions = [5, 10, 20, 50, 100];

  constructor(
    private torneoService:TorneoService
  ) { }

  ngOnInit(): void {
    this.torneoService.ObtenerTorneos().subscribe(respuesta=>{
      console.log(respuesta);
      this.Torneos=respuesta;
    });
  }

  handlePage(e: PageEvent) {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }

  borrarRegistro(id:any,iControl:any){
    console.log(id);
    console.log(iControl);
    if(window.confirm("Desea borrar este torneo?")){

      this.torneoService.BorrarTorneo(id).subscribe((respuesta)=>{
                this.Torneos.splice(iControl,1);
      });
    }
      
  }



}
