import { Component, OnInit } from '@angular/core';
import {fundido} from '../animation';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [fundido]
})
export class HomeComponent implements OnInit {
  title = 'Bienvenido a NGZOO';
  constructor() { }

  ngOnInit() {
    console.log('home.component cargado!');
  }

}
