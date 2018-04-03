import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  public titulo;
  public nombreDelParque: string;

  constructor() {
    this.titulo = "Este es la tienda";  
   }

  ngOnInit() {
  }

  mostrarNombre(){
    console.log(this.nombreDelParque);
  }  
}
