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

  enviarDatos(): any {
    // console.log("Me presionaste ");
    console.log(this.formularioDeLogin.value);
    this.torneoService.LoginUser(this.formularioDeLogin.value).subscribe(datos => {
      console.log(datos);
      // console.log(respuesta.status);
      // datos.success != ""
      if ((datos['resultado'] == "OK")) {
        this.ruteador.navigateByUrl('/home');
        
      }
      else {
        alert("Usuario o contraseña incorrecto");
      }
    

      // alert("Equipo agregado con exito ");

    });

  }

}
