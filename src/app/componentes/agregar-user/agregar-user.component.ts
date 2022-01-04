import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { TorneoService } from 'src/app/servicio/torneo.service';
import { CookieService } from 'ngx-cookie-service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-agregar-user',
  templateUrl: './agregar-user.component.html',
  styleUrls: ['./agregar-user.component.css']
})
export class AgregarUserComponent implements OnInit {
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
    

    this.formularioDeUsuario=this.formulario.group({
      nombre:[''],
      correo:[''],
      contrasena:[''],
      tipo_usuario:['']
      
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

  enviarDatos(): any {
    // console.log("Me presionaste ");
    console.log(this.formularioDeUsuario.value);
    this.torneoService.AgregarUsuario(this.formularioDeUsuario.value).subscribe(respuesta => {
      console.log(respuesta);
      if ((respuesta['resultado'] == "OK")) {
        alert((respuesta['mesaje']));
        this.ruteador.navigateByUrl('/listar-usuarios');
        
      }else {
        alert("Correo electronico ya registrado");
        // this.ruteador.navigateByUrl('/login');
        // alert("Usuario o contraseña incorrecto");
      }
      // alert("Equipo agregado con exito ");

    });

  }

  cerrarSesion(){
    // this.cookies.delete("token");
    this.cookieService.delete("nombreUsuario");
    this.cookieService.delete("tipoUsuario");
    this.ruteador.navigateByUrl('/login');
  }

}
