import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { TorneoService } from 'src/app/servicio/torneo.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-agregar-equipo',
  templateUrl: './agregar-equipo.component.html',
  styleUrls: ['./agregar-equipo.component.css']
})
export class AgregarEquipoComponent implements OnInit {

  formularioDeEquipo:FormGroup;
  Torneos:any;
  nomUsuario='';
  usuario='';


  constructor(public formulario:FormBuilder,
    private torneoService:TorneoService,
    private ruteador:Router,
    private cookieService:CookieService

  ) { 
    this.nomUsuario=cookieService.get("nombreUsuario");
    this.usuario=cookieService.get("tipoUsuario");
    this.formularioDeEquipo=this.formulario.group({
      nombre:[''],
      pais:[''],      
      torneo:['']
    }); 

  }

  ngOnInit(): void {
    this.torneoService.ObtenerTorneosFutbol().subscribe(respuesta=>{
      console.log(respuesta);
      this.Torneos=respuesta;
    });
  }

  enviarDatos():any{
    // console.log("Me presionaste ");
    console.log(this.formularioDeEquipo.value);
    this.torneoService.AgregarEquipo(this.formularioDeEquipo.value).subscribe(respuesta=>{
    this.ruteador.navigateByUrl('/listar-equipo-futbol');
    // alert("Equipo agregado con exito ");

    });

  }

}
