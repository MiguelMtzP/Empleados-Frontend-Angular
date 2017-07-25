import {Component, OnInit} from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';

import {EmpleadoService} from '../services/empleado.service';
import {Empleado} from '../models/empleado';

@Component({
  selector:'empleadoEliminar',
  templateUrl:'../views/empleadoEliminar.html',
  providers: [EmpleadoService]
})

export class EmpleadoEliminarComponent implements OnInit{
  public empleado:Empleado;
  public titulo:String;

  constructor(
    private _empleadoService:EmpleadoService,
    private _route:ActivatedRoute,
    private _router:Router
  ){
  }
  ngOnInit(){
    console.log(this.empleado);
    this._route.params.forEach((params:Params)=>{
      let id = params['id'];
      this._empleadoService.deleteEmpleado(id).subscribe(
        res=>{
          console.log(res);
          this._router.navigate(['/']);
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
