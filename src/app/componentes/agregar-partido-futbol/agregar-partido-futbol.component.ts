import { Component, OnInit } from '@angular/core';
import { TorneoService } from 'src/app/servicio/torneo.service';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-partido-futbol',
  templateUrl: './agregar-partido-futbol.component.html',
  styleUrls: ['./agregar-partido-futbol.component.css']
})
export class AgregarPartidoFutbolComponent implements OnInit {
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
    this.torneoService.ObtenerEquiposFutbol().subscribe(respuesta=>{
      console.log(respuesta);
      this.Equipos=respuesta;
    });
    this.torneoService.ObtenerTorneosFutbol().subscribe(respuesta=>{
      console.log(respuesta);
      this.Torneos=respuesta;
    });
  }

  enviarDatos():any{
    // console.log("Me presionaste ");
    console.log(this.formularioDePartido.value);
    this.torneoService.AgregarPartidoFutbol(this.formularioDePartido.value).subscribe(respuesta=>{
    this.ruteador.navigateByUrl('/listar-partido-futbol');

    });

  }

}
