import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { TorneoService } from 'src/app/servicio/torneo.service';
import { CookieService } from 'ngx-cookie-service';

import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-editar-torneo',
  templateUrl: './editar-torneo.component.html',
  styleUrls: ['./editar-torneo.component.css']
})
export class EditarTorneoComponent implements OnInit {
  formularioDeTorneo:FormGroup;
  elID:any;
  nomUsuario='';
  usuario='';

  constructor(
    public formulario:FormBuilder,
    private activateRoute:ActivatedRoute,
    private torneoService:TorneoService,
    private ruteador:Router,
    
    private cookieService:CookieService

  ) { 
    this.nomUsuario=cookieService.get("nombreUsuario");
    this.usuario=cookieService.get("tipoUsuario");
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

    if(cookieService.get("nombreUsuario")==""){
      this.ruteador.navigateByUrl('/login');
      return
    }
    else if(cookieService.get("tipoUsuario")=="Usuario"){
      this.ruteador.navigateByUrl('/home');
      return

    }


  }

  ngOnInit(): void {
    
  }

  enviarDatos():any{
    // console.log("Me presionaste ");
    console.log(this.elID);
    console.log(this.formularioDeTorneo.value);
    this.torneoService.EditarTorneo(this.elID,this.formularioDeTorneo.value).subscribe(()=>{
      alert("Torneo editado exitosamente");

      this.ruteador.navigateByUrl('/listar-torneo');
    });
    

  }

    cerrarSesion(){
    // this.cookies.delete("token");
    this.cookieService.delete("nombreUsuario");
    this.cookieService.delete("tipoUsuario");
    this.ruteador.navigateByUrl('/login');
  }

}
