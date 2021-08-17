import { Component, Injectable, OnInit } from '@angular/core';
import { Ingreso } from './Ingresos.model';
import { IngresosServicio } from './IngresosServicio.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})

@Injectable()
export class IngresosComponent implements OnInit {

  DesIngresoInput:string;
  IngresoInput:number
  
  ingresos: Ingreso[] = [];
  constructor(private IngresosServicio:IngresosServicio) { }

  ngOnInit(): void {
    this.ingresos= this.IngresosServicio.ingresos;
  }

  
  agregarIngreso(){
    let ingreso1 = new Ingreso(this.DesIngresoInput,this.IngresoInput);
    this.IngresosServicio.agregar(ingreso1);
    console.log("se agrego un ingreso")
  }
  
  eliminarRegistro(ingreso: Ingreso){
    this.IngresosServicio.eliminar(ingreso);
  }
}
