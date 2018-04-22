import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {routing, appRoutingProviders} from './app.routing';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';

//Importar nuestro nuevo modulo
import {AdminModule} from './admin/admin.module';

//Componentes
import { AppComponent } from './app.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { ParquesComponent } from './components/parques/parques.component';
import {HttpModule} from '@angular/http';
import { AnimalsComponent } from './components/animals/animals.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { KeepersComponent } from './components/keepers/keepers.component';
import { MainComponent } from './admin/components/main/main.component';
import { ListComponent } from './admin/components/list/list.component';
import { EditComponent } from './admin/components/edit/edit.component';
import { AddComponent } from './admin/components/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    ParquesComponent,
    AnimalsComponent,
    HomeComponent,
    ContactComponent,
    KeepersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AdminModule,
    BrowserAnimationsModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
