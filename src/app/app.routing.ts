import{ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { ListaEmpleadosComponent } from './components/listaEmpleados.component';
import { EmpleadoDetalleComponent } from './components/empleadoDetalle.component';
import { EmpleadoAgregarComponent } from './components/empleadoAgregar.component';
import { EmpleadoEditarComponent } from './components/empleadoEditar.component';
import { EmpleadoEliminarComponent } from './components/empleadoEliminar.component';

const appRoutes: Routes=[
    {path:'',component:ListaEmpleadosComponent},
    {path:'empleado/:id',component:EmpleadoDetalleComponent},
    {path:'agregarEmpleado',component:EmpleadoAgregarComponent},
    {path:'editarEmpleado/:id',component:EmpleadoEditarComponent},
    {path:'eliminarEmpleado/:id',component:EmpleadoEliminarComponent},

    {path:'**',component:ListaEmpleadosComponent}
];

export const appRoutingProviders: any[] =[];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
