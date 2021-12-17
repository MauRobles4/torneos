import { Component, OnInit } from '@angular/core';
import { TorneoService } from 'src/app/servicio/torneo.service';
import {LoginComponent} from '../login/login.component';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Partidos:any;
  nomUsuario='';
  usuario='';
  // usuario=LoginComponent.tipoUsuario;
  
  Partidos2:any;
  fecha_final:any;
  today = new Date();
  time:any;
  // time="";
  // today = Date.now();
  // dateFormat = require('dateformat');
  // now = new Date();
  
  
  

  constructor(
    private torneoService:TorneoService,    
    private cookieService:CookieService,
    private ruteador:Router

  ) { 
    if(cookieService.get("nombreUsuario")==""){
      this.ruteador.navigateByUrl('/login');
      return
    }
    this.usuario=cookieService.get("tipoUsuario");
    this.nomUsuario=cookieService.get("nombreUsuario");
    console.log(this.usuario);
  }

  ngOnInit(): void {
    this.torneoService.ObtenerFechaFinal().subscribe(respuesta=>{
      this.fecha_final=respuesta;
      console.log(respuesta);
      // console.log(this.fecha_final[0]);
      // this.fecha_final=this.fecha_final[0];
      this.fecha_final=this.fecha_final[0];
      // this.fecha_final=this.fecha_final.fecha_final.toString();
      this.fecha_final=this.fecha_final.fecha_final;
      // this.fecha_final2=this.fecha_final;
      console.log(this.fecha_final);
      
      
    });
    // OBTENER FECHA
    this.time =this.today.getFullYear() + "-" +(this.today.getMonth()+1) + "-" + (this.today.getDay()+15) + " " + this.today.getHours() + ":" + this.today.getMinutes() + ":" + this.today.getSeconds();
    console.log(this.time);

    this.torneoService.ObtenerProximosPartidosFutbol(this.time).subscribe(respuesta=>{
      console.log(respuesta);
      // console.log("esta es la fecha enviada como parametro "+ this.fecha_final);
      this.Partidos=respuesta;
    });

    this.torneoService.ObtenerProximosPartidosBasquetbol(this.time).subscribe(respuesta2=>{
      console.log(respuesta2);
      this.Partidos2=respuesta2;
    });
  }

  borrarRegistro(id:any,iControl:any){
    console.log(id);
    console.log(iControl);
    if(window.confirm("Desea borrar este partido?")){

      this.torneoService.BorrarPartidoFutbol(id).subscribe((respuesta)=>{
                this.Partidos.splice(iControl,1);
      });
    }
      
  }

  borrarRegistro2(id:any,iControl:any){
    console.log(id);
    console.log(iControl);
    if(window.confirm("Desea borrar este partido?")){

      this.torneoService.BorrarPartidoBasquetbol(id).subscribe((respuesta)=>{
                this.Partidos.splice(iControl,1);
      });
    }
      
  }

  cerrarSesion(){
    // this.cookies.delete("token");
    this.cookieService.delete("nombreUsuario");
    this.cookieService.delete("tipoUsuario");
    this.ruteador.navigateByUrl('/login');
  }

}
