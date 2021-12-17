import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TorneoService } from 'src/app/servicio/torneo.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-agregar-torneo',
  templateUrl: './agregar-torneo.component.html',
  styleUrls: ['./agregar-torneo.component.css']
})
export class AgregarTorneoComponent implements OnInit {

  formularioDeTorneo: FormGroup;
  nomUsuario='';
  usuario='';

  constructor(public formulario: FormBuilder,
    private torneoService: TorneoService,
    private ruteador: Router,
    private cookieService:CookieService
  ) {
    this.nomUsuario = cookieService.get("nombreUsuario");
    this.usuario = cookieService.get("tipoUsuario");

    this.formularioDeTorneo = this.formulario.group({
      nombre: [''],
      pais: [''],
      tipo_torneo: ['']
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
    console.log(this.formularioDeTorneo.value);
    this.torneoService.AgregarTorneo(this.formularioDeTorneo.value).subscribe(respuesta => {
      // this.ruteador.navigateByUrl('/listar-torneo');
      console.log(respuesta);
      alert("Torneo agregado con exito ");

    });

  }

    cerrarSesion(){
    // this.cookies.delete("token");
    this.cookieService.delete("nombreUsuario");
    this.cookieService.delete("tipoUsuario");
    this.ruteador.navigateByUrl('/login');
  }

}
