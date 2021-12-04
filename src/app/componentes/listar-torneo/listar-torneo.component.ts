import { Component, OnInit } from '@angular/core';

import { TorneoService } from 'src/app/servicio/torneo.service';

@Component({
  selector: 'app-listar-torneo',
  templateUrl: './listar-torneo.component.html',
  styleUrls: ['./listar-torneo.component.css']
})
export class ListarTorneoComponent implements OnInit {

  Torneos:any;
  filterPost = ''; 

  constructor(
    private torneoService:TorneoService
  ) { }

  ngOnInit(): void {
    this.torneoService.ObtenerTorneos().subscribe(respuesta=>{
      console.log(respuesta);
      this.Torneos=respuesta;
    });
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
