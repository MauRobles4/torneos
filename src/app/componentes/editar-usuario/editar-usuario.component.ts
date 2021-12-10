import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { TorneoService } from 'src/app/servicio/torneo.service';

import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {
  formularioDeUsuario:FormGroup;
  elID:any;
  

  constructor(
    public formulario:FormBuilder,
    private activateRoute:ActivatedRoute,
    private torneoService:TorneoService,
    private ruteador:Router

  ) {
    this.elID=this.activateRoute.snapshot.paramMap.get('id');
    console.log("Este es el id del editar "+this.elID);


    this.torneoService.ObtenerUsuario(this.elID).subscribe(respuesta=>{
      console.log(respuesta);
      this.formularioDeUsuario.setValue({
        nombre:respuesta[0]['nombre'],
        correo:respuesta[0]['correo'],
        contrasena:respuesta[0]['contrasena'],        
        
      });

    });
    
    this.formularioDeUsuario=this.formulario.group({
      nombre:[''],
      correo:[''],
      contrasena:['']
      
    });

   }

  ngOnInit(): void {
  }

  enviarDatos():any{
    // console.log("Me presionaste ");
    console.log(this.elID);
    console.log(this.formularioDeUsuario.value);
    this.torneoService.EditarUsuario(this.elID,this.formularioDeUsuario.value).subscribe(()=>{
      this.ruteador.navigateByUrl('/listar-usuarios');
    });
    

  }

}