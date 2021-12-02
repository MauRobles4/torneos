import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { TorneoService } from 'src/app/servicio/torneo.service';


import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-editar-partido-futbol',
  templateUrl: './editar-partido-futbol.component.html',
  styleUrls: ['./editar-partido-futbol.component.css']
})
export class EditarPartidoFutbolComponent implements OnInit {
  formularioDePartido:FormGroup;
  elID:any;
  Torneos:any;
  

  Equipos:any;
  constructor(
    public formulario:FormBuilder,
    private activateRoute:ActivatedRoute,
    private torneoService:TorneoService,
    private ruteador:Router

  ) {
    this.elID=this.activateRoute.snapshot.paramMap.get('id');
    console.log("Este es el id del editar "+this.elID);


    this.torneoService.ObtenerPartidoFutbol(this.elID).subscribe(respuesta=>{
      console.log(respuesta);
      this.formularioDePartido.setValue({
        equipo1:respuesta[0]['equipo1'],
        equipo2:respuesta[0]['equipo2'],
        horario:respuesta[0]['horario'],
        estadio:respuesta[0]['estadio'],
        lugar:respuesta[0]['lugar'],
        torneo:respuesta[0]['torneo']
      });

    });
    
    
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
    console.log(this.elID);
    console.log(this.formularioDePartido.value);
    this.torneoService.EditarPartidoFutbol(this.elID,this.formularioDePartido.value).subscribe(()=>{
      this.ruteador.navigateByUrl('/listar-partido-futbol');
    });
  }

}
