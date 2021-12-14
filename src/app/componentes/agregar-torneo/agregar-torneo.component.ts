import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { TorneoService } from 'src/app/servicio/torneo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-torneo',
  templateUrl: './agregar-torneo.component.html',
  styleUrls: ['./agregar-torneo.component.css']
})
export class AgregarTorneoComponent implements OnInit {

  formularioDeTorneo:FormGroup;
  usuario='';

  constructor(public formulario:FormBuilder,
    private torneoService:TorneoService,
    private ruteador:Router
    ) { 
      this.usuario='false';
    this.formularioDeTorneo=this.formulario.group({
      nombre:[''],
      pais:[''],
      tipo_torneo:['']
    }); 
  }

  ngOnInit(): void {
  }

  enviarDatos():any{
    // console.log("Me presionaste ");
    console.log(this.formularioDeTorneo.value);
    this.torneoService.AgregarTorneo(this.formularioDeTorneo.value).subscribe(respuesta=>{
    // this.ruteador.navigateByUrl('/listar-torneo');
    console.log(respuesta);
    alert("Torneo agregado con exito ");

    });

  }
  
}
