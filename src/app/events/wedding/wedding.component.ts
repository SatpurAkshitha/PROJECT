import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wedding',
  templateUrl: './wedding.component.html',
  styleUrls: ['./wedding.component.css']
})
export class WeddingComponent {
  constructor(public router:Router){}

}
