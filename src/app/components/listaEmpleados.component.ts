import {Component, OnInit} from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';

import {EmpleadoService} from '../services/empleado.service';
import {Empleado} from '../models/empleado';


@Component({
  selector:'listaEmpleados',
  templateUrl: '../views/listaEmpleados.html',
  providers: [EmpleadoService]
})

export class ListaEmpleadosComponent implements OnInit{
  public titulo:string;
  public msjError;
  public empleados: Empleado[];
  constructor(
    private _empleadoService: EmpleadoService
  ){
    this.titulo='Empleados Registrados en el sistema';
  }
  ngOnInit(){
    this._empleadoService.getEmpleados().subscribe(
      resultado=>{
        console.log(resultado);
        this.empleados=resultado;

      },
      error=>{
        this.msjError= <any>error;
        if(this.msjError!= null){
          console.log(this.msjError);
          alert('Error en la peticion');
        }
      }
    );
  }
}
