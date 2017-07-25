import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Empleado} from '../models/empleado';

@Injectable()
export class EmpleadoService{
  public url:string;

  constructor(private _http:Http){
    this.url='http://localhost:3000/';
  }

  getEmpleados(){
    return this._http.get(this.url+'empleados')
                      .map(res=>res.json());
  }
  getEmpleado(id:String){
    return this._http.get(this.url+'empleado/'+id)
                      .map(res=>res.json());

  }
  addEmpleado(empleado:Empleado){
    let json= JSON.stringify(empleado);
    let params= json;
    let headers= new Headers({'Content-Type':'application/json'});
    return this._http.post(this.url+'empleado',params,{headers:headers})
                     .map(res=>res.json());
  }
  updateEmpleado(id:string,empleado:Empleado){
    let json= JSON.stringify(empleado);
    let params= json;
    let headers= new Headers({'Content-Type':'application/json'});
    return this._http.put(this.url+'empleado/'+id,params,{headers:headers})
                     .map(res=>res.json());
  }

  deleteEmpleado(id:string){
    return this._http.delete(this.url+'empleado/'+id)
                      .map(res=>res.json());
  }

}
