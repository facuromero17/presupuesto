import { Input, OnInit } from '@angular/core';
import { Component} from '@angular/core';
import { Egresos } from '../Egresos.model';
import { EgresosServicio } from './EgresoServicio.service';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent implements OnInit {

  @Input() gasto: Egresos;
  EgresoInput:number;
  DesEgresoInput:string;
  egresos: Egresos[] = [];
  constructor(private EgresoServicio: EgresosServicio) { }
  ngOnInit(): void {
    this.egresos = this.EgresoServicio.egresos;
  }

  eliminar(egreso:Egresos){
  const indice: number = this.egresos.indexOf(egreso)
  this.egresos.splice(indice,1)
  }

  agregarGasto(){
   
    
  }


}
