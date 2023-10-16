import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-latest-events',
  templateUrl: './latest-events.component.html',
  styleUrls: ['./latest-events.component.css']
})
export class LatestEventsComponent {
  constructor(public router:Router){}

}
