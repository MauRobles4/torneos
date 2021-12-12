import { Component, OnInit } from '@angular/core';
import { TorneoService } from 'src/app/servicio/torneo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-tabla-clasificacion',
  templateUrl: './tabla-clasificacion.component.html',
  styleUrls: ['./tabla-clasificacion.component.css']
})
export class TablaClasificacionComponent implements OnInit {
  Equipos: any;

  constructor(
    private activateRoute: ActivatedRoute,
    private torneoService: TorneoService

  ) { }

  ngOnInit(): void {
    this.torneoService.ObtenerTablaClasificacion().subscribe(respuesta => {
      console.log(respuesta);
      this.Equipos = respuesta;
    });
  }

}
