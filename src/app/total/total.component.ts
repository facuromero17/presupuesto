import { Component, Input, OnInit } from '@angular/core';
import { Egresos } from '../Egresos.model';
import { EgresosServicio } from '../egresos/EgresoServicio.service';
import { Ingreso } from '../ingresos/Ingresos.model';
import { IngresosServicio } from '../ingresos/IngresosServicio.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css'],
})
export class TotalComponent implements OnInit {
  ingresos: Ingreso[] = [];
  egresos: Egresos[] = [];
 

  @Input()IngresoTotal:number;
  

  constructor(
    private ingresoServicio: IngresosServicio,
    private EgresoServicio: EgresosServicio
  ) {
    this.egresos = EgresoServicio.egresos;
    this.ingresos = ingresoServicio.ingresos;
  }

  ngOnInit(): void {}

  //metodos
  getIngresosTotal() {
    let ingresoTotal:number=0;
    this.ingresos.forEach(ingreso =>{ingresoTotal = ingresoTotal + ingreso.valor});
    
    return ingresoTotal;
    
  }
  getEgresosTotal() {
    let egresoTotal:number=0;
    this.egresos.forEach(egreso =>{egresoTotal = egresoTotal + egreso.valor} )
    return egresoTotal;
  }

  getPresupuestoTotal() {
    
   this.IngresoTotal= this.getIngresosTotal() - this.getEgresosTotal();
   return this.IngresoTotal;
  }
}
