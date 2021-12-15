import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { TorneoService } from 'src/app/servicio/torneo.service';
import { CookieService } from 'ngx-cookie-service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-editar-equipo-basquetbol',
  templateUrl: './editar-equipo-basquetbol.component.html',
  styleUrls: ['./editar-equipo-basquetbol.component.css']
})
export class EditarEquipoBasquetbolComponent implements OnInit {

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


    this.torneoService.ObtenerEquipoBasquetbol(this.elID).subscribe(respuesta=>{
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
  }

  ngOnInit(): void {
    this.torneoService.ObtenerTorneosBasquetbol().subscribe(respuesta=>{
      console.log(respuesta);
      this.Torneos=respuesta;
    });
  }

  enviarDatos():any{
    // console.log("Me presionaste ");
    console.log(this.elID);
    console.log(this.formularioDeEquipo.value);
    this.torneoService.EditarEquipoBasquetbol(this.elID,this.formularioDeEquipo.value).subscribe(()=>{
      this.ruteador.navigateByUrl('/listar-equipo-basquetbol');
    });
    

  }

}
