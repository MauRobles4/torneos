import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { TorneoService } from 'src/app/servicio/torneo.service';
import { CookieService } from 'ngx-cookie-service';
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {
  formularioDeUsuario:FormGroup;
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


    this.torneoService.ObtenerUsuario(this.elID).subscribe(respuesta=>{
      console.log(respuesta);
      this.formularioDeUsuario.setValue({
        nombre:respuesta[0]['nombre'],
        correo:respuesta[0]['correo'],
        contrasena:respuesta[0]['contrasena'],
        tipo:respuesta[0]['tipo'],

        
      });

    });
    
    this.formularioDeUsuario=this.formulario.group({
      nombre:[''],
      correo:[''],
      contrasena:[''],
      tipo:['']
      
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
    console.log(this.formularioDeUsuario.value);
    this.torneoService.EditarUsuario(this.elID,this.formularioDeUsuario.value).subscribe(()=>{
      alert("Usuario editado exitosamente");
      this.ruteador.navigateByUrl('/listar-usuarios');
    });
    

  }

    cerrarSesion(){
    // this.cookies.delete("token");
    this.cookieService.delete("nombreUsuario");
    this.cookieService.delete("tipoUsuario");
    this.ruteador.navigateByUrl('/login');
  }

}
