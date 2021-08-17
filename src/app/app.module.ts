import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TotalComponent } from './total/total.component';
import { FormularioComponent } from './formulario/formulario.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { EgresosComponent } from './egresos/egresos.component';
import { FormsModule } from '@angular/forms';
import { EgresosServicio } from './egresos/EgresoServicio.service';
import { IngresosServicio } from './ingresos/IngresosServicio.service';

@NgModule({
  declarations: [
    AppComponent,
    TotalComponent,
    FormularioComponent,
    IngresosComponent,
    EgresosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [EgresosServicio,IngresosServicio],
  bootstrap: [AppComponent]
})
export class AppModule { }
