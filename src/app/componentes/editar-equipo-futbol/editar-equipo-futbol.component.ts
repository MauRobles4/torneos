import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { TorneoService } from 'src/app/servicio/torneo.service';
import { CookieService } from 'ngx-cookie-service';
import {Router,ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-editar-equipo-futbol',
  templateUrl: './editar-equipo-futbol.component.html',
  styleUrls: ['./editar-equipo-futbol.component.css']
})
export class EditarEquipoFutbolComponent implements OnInit {

  formularioDeEquipo:FormGroup;
  elID:any;
  Torneos:any;
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


    this.torneoService.ObtenerEquipoFutbol(this.elID).subscribe(respuesta=>{
      console.log(respuesta);
      this.formularioDeEquipo.setValue({
        nombre:respuesta[0]['nombre'],
        pais:respuesta[0]['pais'],
        torneo:respuesta[0]['torneo'],        
      });

    });
    
    this.formularioDeEquipo=this.formulario.group({
      nombre:[''],
      pais:[''],
      torneo:['']
      
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
    this.torneoService.ObtenerTorneosFutbol().subscribe(respuesta=>{
      console.log(respuesta);
      this.Torneos=respuesta;
    });

  }

  enviarDatos():any{
    // console.log("Me presionaste ");
    console.log(this.elID);
    console.log(this.formularioDeEquipo.value);
    this.torneoService.EditarEquipoFutbol(this.elID,this.formularioDeEquipo.value).subscribe(()=>{
      alert("Equipo editado exitosamente");
      this.ruteador.navigateByUrl('/listar-equipo-futbol');
    });
    

  }

    cerrarSesion(){
    // this.cookies.delete("token");
    this.cookieService.delete("nombreUsuario");
    this.cookieService.delete("tipoUsuario");
    this.ruteador.navigateByUrl('/login');
  }

  

}
