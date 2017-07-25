import {Component, OnInit} from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';

import {EmpleadoService} from '../services/empleado.service';
import {Empleado} from '../models/empleado';


@Component({
  selector: 'empleadoDetalle',
  templateUrl: '../views/empleadoDetalle.html',
  providers: [  EmpleadoService]
})
export class EmpleadoDetalleComponent implements OnInit{
  public empleado: Empleado;
  public eliminar: boolean;
  constructor(
    private _empleadoService: EmpleadoService,
    private _route: ActivatedRoute,
    private _router: Router
  ){}
  ngOnInit(){
    this.getEmpleado();
    this.eliminar=false;
  }
  getEmpleado(){
    this._route.params.forEach((params:Params)=>{
      let id= params['id'];
      this._empleadoService.getEmpleado(id).subscribe(
        res=>{
          this.empleado=res;
          if(!this.empleado){
            this._router.navigate(['/']);
          }
        },
        err=>{
          if(err!= null){
            console.log(err);
            alert ('error en la peticion');
          }
        }
      );
    });
  }

}
