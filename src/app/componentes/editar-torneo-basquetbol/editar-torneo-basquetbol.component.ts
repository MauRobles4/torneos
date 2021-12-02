import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { TorneoService } from 'src/app/servicio/torneo.service';


import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-editar-torneo-basquetbol',
  templateUrl: './editar-torneo-basquetbol.component.html',
  styleUrls: ['./editar-torneo-basquetbol.component.css']
})
export class EditarTorneoBasquetbolComponent implements OnInit {
  formularioDeTorneo:FormGroup;
  elID:any;
  constructor(
    public formulario:FormBuilder,
    private activateRoute:ActivatedRoute,
    private torneoService:TorneoService,
    private ruteador:Router
  ) {
    this.elID=this.activateRoute.snapshot.paramMap.get('id');
    console.log("Este es el id del editar "+this.elID);


    this.torneoService.ObtenerTorneoBasquetbol(this.elID).subscribe(respuesta=>{
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
    this.torneoService.EditarTorneoBasquetbol(this.elID,this.formularioDeTorneo.value).subscribe(()=>{
      this.ruteador.navigateByUrl('/listar-torneo-basquetbol');
    });
    

  }

}
