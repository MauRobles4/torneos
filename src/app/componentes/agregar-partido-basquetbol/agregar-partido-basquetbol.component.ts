import { Component, OnInit } from '@angular/core';
import { TorneoService } from 'src/app/servicio/torneo.service';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-partido-basquetbol',
  templateUrl: './agregar-partido-basquetbol.component.html',
  styleUrls: ['./agregar-partido-basquetbol.component.css']
})
export class AgregarPartidoBasquetbolComponent implements OnInit {
  formularioDePartido:FormGroup;

  Torneos:any;

  Equipos:any;
  constructor(public formulario:FormBuilder,
    private torneoService:TorneoService,
    private ruteador:Router
    ) {
      this.formularioDePartido=this.formulario.group({
        equipo1:[''],
        equipo2:[''],
        horario:[''],
        estadio:[''],
        lugar:[''],
        torneo:['']
      }); 
     }

  ngOnInit(): void {
    this.torneoService.ObtenerEquiposBasquetbol().subscribe(respuesta=>{
      console.log(respuesta);
      this.Equipos=respuesta;
    });
    this.torneoService.ObtenerTorneosBasquetbol().subscribe(respuesta=>{
      console.log(respuesta);
      this.Torneos=respuesta;
    });
  }

  enviarDatos():any{
    // console.log("Me presionaste ");
    console.log(this.formularioDePartido.value);
    this.torneoService.AgregarPartidoBasquetbol(this.formularioDePartido.value).subscribe(respuesta=>{
    this.ruteador.navigateByUrl('/listar-partido-basquetbol');

    });

  }

}
