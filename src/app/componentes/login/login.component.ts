import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TorneoService } from 'src/app/servicio/torneo.service';
import { Router } from '@angular/router';
import * as myGlobals from '../globals';
// export const nombreUsuario='';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  formularioDeLogin: FormGroup;
  nombreUsuario: any;
  
  


  constructor(public formulario: FormBuilder,
    private torneoService: TorneoService,
    private ruteador: Router
  ) {
    this.formularioDeLogin = this.formulario.group({
      usuario: [''],
      contrasena: [''],
      

    });
  }

  ngOnInit(): void {
  }

  enviarDatos(usuario: string, password:string){
    // console.log("Me presionaste ");
    // console.log(this.formularioDeLogin.value);
    if ((usuario=="") || (password=="") ){
      alert("El usuario y contraseña son obligatorios");      
      return;
    }
    console.log(usuario + password);
    this.torneoService.LoginUser(usuario,password).subscribe(datos => {
      console.log(datos);
      // this.nombreUsuario=datos['datos'];
      // this.nombreUsuario=this.nombreUsuario[0].nombre;
      // console.log(this.nombreUsuario);
      //-------------------------------------------------------------------------
      // this.nombreUsuario=this.nombreUsuario.nombre;
      // myGlobals.nombreUsuario="dasdasd";
      // console.log("Esta es la variable global "+ myGlobals.nombreUsuario );
      
      // console.log(respuesta.status);
      // datos.success != ""
      if ((datos['resultado'] == "OK")) {
        alert((datos['mesaje']));
        this.ruteador.navigateByUrl('/home');
        
      }else {
        alert("Usuario o contraseña incorrecto");
        console.log("si entra");
        // this.ruteador.navigateByUrl('/login');
        // alert("Usuario o contraseña incorrecto");
      }
    

      // alert("Equipo agregado con exito ");

    });
    
    

  }
  

}

