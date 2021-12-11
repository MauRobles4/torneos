import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { ChartDataset } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-annotation';
// import { Label } from 'ng2-charts';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
// import DataLabelsPlugin from 'chart-plugin-datalabels';
import { TorneoService } from 'src/app/servicio/torneo.service';

@Component({
  selector: 'app-graficas-futbol',
  templateUrl: './graficas-futbol.component.html',
  styleUrls: ['./graficas-futbol.component.css']
})
export class GraficasFutbolComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  Equipos:any;
  equipo1:any;
  equipo2:any;
  // public barChartOptions: ChartOptions = {
  //   responsive: true,
  //   // We use these empty structures as placeholders for dynamic theming.
  //   scales: { xAxes: {}, 
  //   yAxes: {} },
  //   plugins: {
  //     datalabels: {
  //       anchor: 'end',
  //       align: 'end',
  //     }
  //   }
  // };

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }
  };
   public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    DataLabelsPlugin
  ];
  
  public barChartData: ChartData<'bar'> = {
    
    labels: [ '2006' ],
    datasets: [
      { data: [ 65], label: 'Series A' },
      { data: [ 28], label: 'Series B' },
      { data: [ 23], label: 'Series C' },
      { data: [ 44], label: 'Series D' }
    ]
  };

   // events
   public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  // // PRIMER METODO
  // public barChartLabels: Label[] = ['2021'];
  // public barChartType: ChartType = 'bar';
  // public barChartLegend = true;
  // public barChartPlugins = [pluginDataLabels];
  // //Datos que vamos a cargar en las graficas 
  // public barChartData: ChartDataset[];
  // public chartColors: any;

  private equipo:any;
  // private dato: string;
  //Arreglo de los datos que vamos a pasar
  private datos = [];
  //Arreglo de las categorias que vamos a pasar
  private nombreEquipo = [];
  //Arreglo de los colores que vamos a pasar
  private colores = [];



  constructor(protected torneoService: TorneoService) {
    // this.getEquipos();
  }

  ngOnInit(): void {
    this.torneoService.ObtenerEquiposMasPartidos().subscribe(respuesta => {
      console.log(respuesta);
      this.Equipos = respuesta;
    });
    // this.fecha_final=this.fecha_final[0];
    //   // this.fecha_final=this.fecha_final.fecha_final.toString();
    //   this.fecha_final=this.fecha_final.fecha_final;
      this.equipo1=this.Equipos[0];
      this.equipo1=this.equipo1.equipo1;
      console.log(this.equipo1);
    console.log(this.Equipos[0].equipo1);
    console.log(this.Equipos[0].partidos);
  }

  // getEquipos() {
  //   this.torneoService.ObtenerEquiposMasPartidos().subscribe(res => {
  //     this.equipo = res;
  //     //Obtenemos las categorias y recorremos almacenando 
  //     //en cada arreglo lo necesario
  //     for (const cate of this.equipo) {
  //       // this.dato = cate.DATOS_CATE.split(',');
  //       // this.datos.push(this.dato);
  //       this.datos.push(cate.DATOS_CATE);
  //       this.nombreEquipo.push(cate.NOMBRE_CATE);
        
  //     }

  //     //Llamado a función
  //     this.cargarDatos(this.datos, this.nombreEquipo);
  //   });
  // }

  //Función que carga los datos en la grafica, asi como los colores
  // cargarDatos(datos:any, nombreEquipo:any) {
  //   this.barChartData = [];
  //   this.chartColors = [];

  //   for (const index in datos) {
  //     this.barChartData.push({ data: datos[index], label: nombreEquipo[index] });
  //     this.chartColors.push({ backgroundColor: "black" });
  //   }

  // }

}
