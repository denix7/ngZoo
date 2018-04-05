//import {ModuleWidthProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

//Componentes
import {TiendaComponent} from './components/tienda/tienda.component';
import {ParquesComponent} from './components/parques/parques.component'
import { ModuleWithProviders } from '@angular/compiler/src/core';

const appRoutes: Routes = [
    {
        path: '',
        component: TiendaComponent
    },
    {
        path: '',
        redirectTo: 'tienda',
        pathMatch: 'full'
    },
    {
        path: 'tienda',
        component: TiendaComponent
    },
    {//carga ruta mala
        path: '**',
        component: TiendaComponent
    }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);