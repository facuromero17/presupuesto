import { Egresos } from '../Egresos.model';

export class EgresosServicio {
  egresos: Egresos[] = [new Egresos("pollo",200)];


  eliminar(egreso:Egresos){
    const indice:number = this.egresos.indexOf(egreso);
    this.egresos.splice(indice,1)
  }

  agregar(egreso:Egresos){
    this.egresos.push(egreso);
  }
}
