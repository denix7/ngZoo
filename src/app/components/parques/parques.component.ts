import { Component, OnInit } from '@angular/core';
import { Input, Output } from '@angular/core';

@Component({
  selector: 'app-parques',
  templateUrl: './parques.component.html',
  styleUrls: ['./parques.component.css']
})
export class ParquesComponent implements OnInit {
  @Input() nombre: string;
  public metros: number;
  public vegetacion: string;
  public abierto: boolean;
  constructor() {
    this.nombre = "Parque de caballos";
    this.metros = 450;
    this.vegetacion = "alta";
    this.abierto = false;
  }

  ngOnInit() {
  }

}
