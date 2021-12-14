import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { TorneoService } from 'src/app/servicio/torneo.service';


import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-editar-partido-basquetbol',
  templateUrl: './editar-partido-basquetbol.component.html',
  styleUrls: ['./editar-partido-basquetbol.component.css']
})
export class EditarPartidoBasquetbolComponent implements OnInit {
  formularioDePartido:FormGroup;
  elID:any;
  Torneos:any;
  Equipos:any;
  usuario='';
  

  constructor(
    public formulario:FormBuilder,
    private activateRoute:ActivatedRoute,
    private torneoService:TorneoService,
    private ruteador:Router
  ) { 
    this.usuario='false';
    this.elID=this.activateRoute.snapshot.paramMap.get('id');
    console.log("Este es el id del editar "+this.elID);


    this.torneoService.ObtenerPartidoBasquetbol(this.elID).subscribe(respuesta=>{
      console.log(respuesta);
      this.formularioDePartido.setValue({
        equipo1:respuesta[0]['equipo1'],
        equipo2:respuesta[0]['equipo2'],
        horario:respuesta[0]['horario'],
        estadio:respuesta[0]['estadio'],
        lugar:respuesta[0]['lugar'],
        torneo:respuesta[0]['torneo'],
        puntos_local:respuesta[0]['puntos_local'],
        puntos_visitante:respuesta[0]['puntos_visitante']
      });
      

    });
    
    this.formularioDePartido=this.formulario.group({
        equipo1:[''],
        equipo2:[''],
        horario:[''],
        estadio:[''],
        lugar:[''],
        torneo:[''],
        puntos_local:[0],
        puntos_visitante:[0]
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
    console.log(this.elID);
    console.log(this.formularioDePartido.value);
    this.torneoService.EditarPartidoBasquetbol(this.elID,this.formularioDePartido.value).subscribe(()=>{
      this.ruteador.navigateByUrl('/listar-partido-basquetbol');
    });
  }

}
