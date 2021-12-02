import { Component, OnInit } from '@angular/core';
import { TorneoService } from 'src/app/servicio/torneo.service';

@Component({
  selector: 'app-listar-partido-basquetbol',
  templateUrl: './listar-partido-basquetbol.component.html',
  styleUrls: ['./listar-partido-basquetbol.component.css']
})
export class ListarPartidoBasquetbolComponent implements OnInit {
  Partidos:any;

  constructor(
    private torneoService:TorneoService

  ) { }

  ngOnInit(): void {
    this.torneoService.ObtenerPartidosBasquetbol().subscribe(respuesta=>{
      console.log(respuesta);
      this.Partidos=respuesta;
    });
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
