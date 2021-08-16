import { Input } from '@angular/core';
import { Component} from '@angular/core';
import { Egresos } from '../Egresos.model';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent  {

  @Input() gasto: Egresos;
  egresoInput:number;

  constructor() { }

  egresos: Egresos[] = [];

  agregarGasto(){
    let gasto1 = new Egresos(this.egresoInput)
    console.log(this.egresoInput);
  }


}
