import { Component, OnInit } from '@angular/core';
import { TorneoService } from 'src/app/servicio/torneo.service';

@Component({
  selector: 'app-listar-partido-futbol',
  templateUrl: './listar-partido-futbol.component.html',
  styleUrls: ['./listar-partido-futbol.component.css']
})
export class ListarPartidoFutbolComponent implements OnInit {
  Partidos:any;

  constructor(
    private torneoService:TorneoService
  ) { }

  ngOnInit(): void {
    this.torneoService.ObtenerPartidosFutbol().subscribe(respuesta=>{
      console.log(respuesta);
      this.Partidos=respuesta;
    });
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
