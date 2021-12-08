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
      id:['1'],
      usuario: [''],
      contrasena: [''],

    });
  }

  ngOnInit(): void {
  }

  enviarDatos(): any {
    // console.log("Me presionaste ");
    console.log(this.formularioDeLogin.value);
    this.torneoService.LoginUser(this.formularioDeLogin.value).subscribe(respuesta => {
      console.log(respuesta);
      console.log(respuesta.status);
      if ((respuesta !="")){
        this.ruteador.navigateByUrl('/home');

      }else if(respuesta.status==200){
        console.log(respuesta.data);
        alert("Usuario o contraseña incorrecto");
      }
    
      // alert("Equipo agregado con exito ");

    });

  }

}
