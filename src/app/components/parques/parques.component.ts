import { Component, OnInit, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Input, Output } from '@angular/core';
import { SimpleChange } from '@angular/core/src/change_detection/change_detection_util';

@Component({
  selector: 'parques',
  templateUrl: './parques.component.html',
  styleUrls: ['./parques.component.css']
})
export class ParquesComponent implements OnChanges {
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

  ngOnChanges(changes: SimpleChanges){
    console.log(changes);
  }

  ngOnInit() {
    console.log("metodo on init lanzado");
  }

}
