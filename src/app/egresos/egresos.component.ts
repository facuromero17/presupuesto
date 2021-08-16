import { Component, OnInit } from '@angular/core';
import { Egresos } from '../Egresos.model';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent  {

  gasto:number;

  constructor() { }

  egresos: Egresos[] = [];

  agregarGasto(){
    let gasto1 = new Egresos(this.gasto)
  }


}
