//Modulos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AdminRoutingModule} from './admin.routing.module';

//Components
import {MainComponent} from './components/main/main.component';
import {ListComponent} from './components/list/list.component';
import {AddComponent} from './components/add/add.component';
import {EditComponent} from './components/edit/edit.component';

@NgModule({
  imports: [//cargo modules
    CommonModule,
    FormsModule,
    HttpModule,
    AdminRoutingModule
  ],
  declarations: [//cargo components
    MainComponent,
    ListComponent,
    AddComponent,
    EditComponent
  ],
  exports: [//en caso de usar estos components fuera
    MainComponent,
    ListComponent,
    AddComponent,
    EditComponent
  ],
  providers: []//cargamos servicios de manera global
})
export class AdminModule { }
