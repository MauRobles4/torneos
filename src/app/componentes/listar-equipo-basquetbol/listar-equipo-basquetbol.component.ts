import { Component, OnInit } from '@angular/core';
import { TorneoService } from 'src/app/servicio/torneo.service';


@Component({
  selector: 'app-listar-equipo-basquetbol',
  templateUrl: './listar-equipo-basquetbol.component.html',
  styleUrls: ['./listar-equipo-basquetbol.component.css']
})
export class ListarEquipoBasquetbolComponent implements OnInit {

  Equipos:any;
  constructor(
    private torneoService:TorneoService

  ) { }

  ngOnInit(): void {
    this.torneoService.ObtenerEquiposBasquetbol().subscribe(respuesta=>{
      console.log(respuesta);
      this.Equipos=respuesta;
    });
  }

  borrarRegistro(id:any,iControl:any){
    console.log(id);
    console.log(iControl);
    if(window.confirm("Desea borrar este equipo?")){

      this.torneoService.BorrarEquipoBasquetbol(id).subscribe((respuesta)=>{
                this.Equipos.splice(iControl,1);
      });
    }
      
  }

}
