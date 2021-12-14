import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { TorneoService } from 'src/app/servicio/torneo.service';


import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-editar-torneo',
  templateUrl: './editar-torneo.component.html',
  styleUrls: ['./editar-torneo.component.css']
})
export class EditarTorneoComponent implements OnInit {
  formularioDeTorneo:FormGroup;
  elID:any;
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


    this.torneoService.ObtenerTorneo(this.elID).subscribe(respuesta=>{
      console.log(respuesta);
      this.formularioDeTorneo.setValue({
        nombre:respuesta[0]['nombre'],
        pais:respuesta[0]['pais'],        
      });

    });
    
    this.formularioDeTorneo=this.formulario.group({
      nombre:[''],
      pais:[''],      
    });


  }

  ngOnInit(): void {
    
  }

  enviarDatos():any{
    // console.log("Me presionaste ");
    console.log(this.elID);
    console.log(this.formularioDeTorneo.value);
    this.torneoService.EditarTorneo(this.elID,this.formularioDeTorneo.value).subscribe(()=>{
      this.ruteador.navigateByUrl('/listar-torneo');
    });
    

  }

}
