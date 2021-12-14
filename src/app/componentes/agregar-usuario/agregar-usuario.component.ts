import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TorneoService } from 'src/app/servicio/torneo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.css']
})
export class AgregarUsuarioComponent implements OnInit {
  formularioDeUsuario: FormGroup;

  constructor(public formulario: FormBuilder,
    private torneoService: TorneoService,
    private ruteador: Router
  ) {
    this.formularioDeUsuario = this.formulario.group({
      nombre: [''],
      correo: [''],
      contrasena: [''],
      tipo_usuario: ['Usuario']
    });
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
        this.ruteador.navigateByUrl('/login');
        
      }else {
        alert("Correo electronico ya registrado");
        // this.ruteador.navigateByUrl('/login');
        // alert("Usuario o contraseña incorrecto");
      }
      // alert("Equipo agregado con exito ");

    });

  }

}
