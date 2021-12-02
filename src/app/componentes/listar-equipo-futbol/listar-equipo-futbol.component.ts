import { Component, OnInit } from '@angular/core';
import { TorneoService } from 'src/app/servicio/torneo.service';

@Component({
  selector: 'app-listar-equipo-futbol',
  templateUrl: './listar-equipo-futbol.component.html',
  styleUrls: ['./listar-equipo-futbol.component.css']
})
export class ListarEquipoFutbolComponent implements OnInit {

  Equipos:any;

  constructor(
    private torneoService:TorneoService
  ) { }

  ngOnInit(): void {
    this.torneoService.ObtenerEquiposFutbol().subscribe(respuesta=>{
      console.log(respuesta);
      this.Equipos=respuesta;
    });
  }

  borrarRegistro(id:any,iControl:any){
    console.log(id);
    console.log(iControl);
    if(window.confirm("Desea borrar este equipo?")){

      this.torneoService.BorrarEquipoFutbol(id).subscribe((respuesta)=>{
                this.Equipos.splice(iControl,1);
      });
    }
      
  }

}
