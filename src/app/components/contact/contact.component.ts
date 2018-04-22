import { Component, OnInit } from '@angular/core';
import{fadeIn} from '../animation';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [fadeIn] 
})
export class ContactComponent implements OnInit {
  title = 'Contact';
  constructor() { }

  ngOnInit() {
  }

}
