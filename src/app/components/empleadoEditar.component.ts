import {Component, OnInit} from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';

import {EmpleadoService} from '../services/empleado.service';
import {Empleado} from '../models/empleado';

@Component({
  selector:'empleadoEditar',
  templateUrl: '../views/empleadoAgregar.html',
  providers: [EmpleadoService]
})

export class EmpleadoEditarComponent implements OnInit{
  public empleado:Empleado;
  public titulo:String;
  public invalidMail:boolean;

  constructor(
    private _empleadoService:EmpleadoService,
    private _route:ActivatedRoute,
    private _router:Router
  ){
    this.titulo="Editar Empleado";
  }
  ngOnInit(){
    this.empleado= new Empleado("","","","","");
    this.getEmpleado();
    this.invalidMail=false;
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

  public onSubmit(){
    console.log(this.empleado);
    this._route.params.forEach((params:Params)=>{
      let id = params['id'];
      this._empleadoService.updateEmpleado(id,this.empleado).subscribe(
        res=>{
          this.empleado= res.actualizado;
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
    });
  }
}
