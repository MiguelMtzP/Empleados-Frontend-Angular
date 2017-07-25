import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import {routing,appRoutingProviders} from './app.routing'
import { AppComponent } from './app.component';
import { ListaEmpleadosComponent } from './components/listaEmpleados.component';
import { EmpleadoDetalleComponent } from './components/empleadoDetalle.component';
import { EmpleadoAgregarComponent } from './components/empleadoAgregar.component';
import { EmpleadoEditarComponent } from './components/empleadoEditar.component';
import { EmpleadoEliminarComponent } from './components/empleadoEliminar.component';



@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  HttpModule,
                  routing
                ],
  declarations: [
                  AppComponent,
                  ListaEmpleadosComponent,
                  EmpleadoDetalleComponent,
                  EmpleadoAgregarComponent,
                  EmpleadoEditarComponent,
                  EmpleadoEliminarComponent
                ],
  bootstrap:    [ AppComponent],
  providers:    [appRoutingProviders]
})
export class AppModule { }
