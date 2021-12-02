import { Component, OnInit } from '@angular/core';
import { TorneoService } from 'src/app/servicio/torneo.service';

@Component({
  selector: 'app-listar-torneo-basquetbol',
  templateUrl: './listar-torneo-basquetbol.component.html',
  styleUrls: ['./listar-torneo-basquetbol.component.css']
})
export class ListarTorneoBasquetbolComponent implements OnInit {
  Torneos:any;

  constructor(
    private torneoService:TorneoService

  ) { }

  ngOnInit(): void {
    this.torneoService.ObtenerTorneosBasquetbol().subscribe(respuesta=>{
      console.log(respuesta);
      this.Torneos=respuesta;
    });
  }

  borrarRegistro(id:any,iControl:any){
    console.log(id);
    console.log(iControl);
    if(window.confirm("Desea borrar este torneo?")){

      this.torneoService.BorrarTorneoBasquetbol(id).subscribe((respuesta)=>{
                this.Torneos.splice(iControl,1);
      });
    }
      
  }



}
