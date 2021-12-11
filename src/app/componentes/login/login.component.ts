import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TorneoService } from 'src/app/servicio/torneo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formularioDeLogin: FormGroup;


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
    console.log(usuario + password);
    this.torneoService.LoginUser(usuario,password).subscribe(datos => {
      console.log(datos);
      // console.log(respuesta.status);
      // datos.success != ""
      if ((datos['resultado'] == "OK")) {
        alert((datos['mesaje']));
        this.ruteador.navigateByUrl('/home');
        
      }else {
        alert("Usuario o contraseña incorrecto");
        // this.ruteador.navigateByUrl('/login');
        // alert("Usuario o contraseña incorrecto");
      }
    

      // alert("Equipo agregado con exito ");

    });

  }

}
