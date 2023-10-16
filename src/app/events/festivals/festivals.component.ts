import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-festivals',
  templateUrl: './festivals.component.html',
  styleUrls: ['./festivals.component.css']
})
export class FestivalsComponent {
  constructor(public router:Router){}

}
