import { Ingreso } from "./Ingresos.model";

export class IngresosServicio{
    ingresos: Ingreso[] = [new Ingreso("pollo",200)];


    eliminar(ingreso:Ingreso){
        const indice: number = this.ingresos.indexOf(ingreso);
        this.ingresos.splice(indice,1);
    }
    agregar(ingreso: Ingreso){
        
        this.ingresos.push(ingreso);
        
      }

}

