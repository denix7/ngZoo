import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {trigger, state, style, transition, animate} from '@angular/core';

@Component({
  selector: 'tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css'],
  animations: [
    trigger('marcar', [
      state('inactive', style({
        border: '5px solid #ccc'
      })),
      state('active', style({
        border: '5px solid yellow',
        background: 'red',
        borderRadius: '50px'
      })),
      transition('inactive => active', animate('300ms linear')), 
      transition('active => inactive', animate('300ms linear')), 
    ])
  ]
})
export class TiendaComponent implements OnInit {
  public titulo;
  public nombreDelParque: string;
  public status;  

  constructor() {
    this.titulo = "Este es la tienda";  
    this.status = 'inactive';
   }

  ngOnInit() {
  }

  mostrarNombre(){
    console.log(this.nombreDelParque);
  }  

  cambiarEstado(status){
    if(status=='inactive')
      this.status = 'active';  
    else
      this.status = 'inactive';  
  }
}
