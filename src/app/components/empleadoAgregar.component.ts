import {Component, OnInit} from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';

import {EmpleadoService} from '../services/empleado.service';
import {Empleado} from '../models/empleado';

@Component({
  selector:'empleadoAgregar',
  templateUrl: '../views/empleadoAgregar.html',
  providers: [EmpleadoService]
})

export class EmpleadoAgregarComponent implements OnInit{
  public empleado:Empleado;
  public titulo:String;
  public invalidMail:boolean;

  constructor(
    private _empleadoService:EmpleadoService,
    private _route:ActivatedRoute,
    private _router:Router
  ){
    this.titulo="Registrar Nuevo Empleado";
  }
  ngOnInit(){
    this.empleado= new Empleado("","","","","");
    this.invalidMail=false;
  }
  public onSubmit(){
    //console.log(this.empleado);
    this._empleadoService.addEmpleado(this.empleado).subscribe(
      res=>{
        this.empleado= res;
        this._router.navigate(['/empleado',this.empleado._id]);
      },
      err=>{
        if(err!= null){
          if(err.status==406){
            this.invalidMail=true;
          }else{
            console.log("Estatus: "+err.status);
            alert ('error en la peticion');
          }
        }
      }
    );
  }
}
